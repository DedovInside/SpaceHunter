import asyncio
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import get_db, AsyncSessionLocal
from app.models.boost import Boost

from sqlalchemy import text

BOOST_DATA = [
    # Energy
    {
        "name": "SOLAR PANELS",
        "category": "energy",
        "description": "Используйте энергию далёких звёзд для генерации постоянного потока энергии вашего корабля.",
        "icon_name": "Solar-Panels.png",
        "passive_income": 100,
        "click_multiplier": 1,
        "base_cost": 1000,
    },
    {
        "name": "THERMONUCLEAR REACTOR",
        "category": "energy",
        "description": "Высвободите мощь термоядерного синтеза для создания мощных энергетических импульсов.",
        "icon_name": "Thermonuclear-Reactor.png",
        "passive_income": 250,
        "click_multiplier": 2,
        "base_cost": 2500,
    },
    {
        "name": "QUANTUM BATTERY",
        "category": "energy",
        "description": "Храните огромные объёмы энергии в квантовых полях для бесперебойного питания в долгих путешествиях.",
        "icon_name": "Quantum-Battery.png",
        "passive_income": 150,
        "click_multiplier": 1,
        "base_cost": 1500,
    },
    {
        "name": "ANTIMATTER GENERATOR",
        "category": "energy",
        "description": "Преобразуйте столкновения материи и антиматерии в чистую энергию для непревзойдённой мощности.",
        "icon_name": "Antimatter-Generator.png",
        "passive_income": 300,
        "click_multiplier": 3,
        "base_cost": 3000,
    },
    
    # Navigation
    {
        "name": "WARP DRIVE",
        "category": "navigation",
        "description": "Искривляйте пространство-время для создания коротких путей через космос, значительно сокращая время полёта.",
        "icon_name": "Warp-Drive.png",
        "passive_income": 100,
        "click_multiplier": 1,
        "base_cost": 1000,
    },
    {
        "name": "ASTROGRAPHY SCANNER",
        "category": "navigation",
        "description": "Картографируйте звёздные явления в реальном времени для прокладки оптимального курса в космосе.",
        "icon_name": "Astrography-Scanner.png",
        "passive_income": 100,
        "click_multiplier": 1,
        "base_cost": 1000,
    },
    {
        "name": "GRAVITY STABILIZER",
        "category": "navigation",
        "description": "Нейтрализуйте гравитационные силы для сохранения стабильности при манёврах на высокой скорости.",
        "icon_name": "Gravity-Stabilizer.png",
        "passive_income": 100,
        "click_multiplier": 1,
        "base_cost": 1000,
    },
    {
        "name": "QUANTUM COMPASS",
        "category": "navigation",
        "description": "Навигация через квантовую запутанность обеспечивает точное позиционирование в любом секторе космоса.",
        "icon_name": "Quantum-Compass.png",
        "passive_income": 100,
        "click_multiplier": 1,
        "base_cost": 1000,
    },

    # Research
    {
        "name": "AI ASSISTANT",
        "category": "research",
        "description": "Продвинутая система ИИ оптимизирует работу корабля и предсказывает космические явления.",
        "icon_name": "AI-Assistant.png",
        "passive_income": 100,
        "click_multiplier": 1,
        "base_cost": 1000,
    },
    {
        "name": "EXPERIMENTAL LABORATORY",
        "category": "research",
        "description": "Передовая лаборатория для исследования и внедрения новых космических технологий.",
        "icon_name": "Experimental-Laboratory.png",
        "passive_income": 100,
        "click_multiplier": 1,
        "base_cost": 1000,
    },
    {
        "name": "UNIVERSAL DECODER",
        "category": "research",
        "description": "Анализируйте и расшифровывайте инопланетные сигналы и артефакты, чтобы раскрыть их технологические секреты.",
        "icon_name": "Universal-Decoder.png",
        "passive_income": 100,
        "click_multiplier": 1,
        "base_cost": 1000,
    },
    {
        "name": "QUANTUM COMPUTER",
        "category": "research",
        "description": "Обрабатывайте огромные объёмы космических данных для обнаружения скрытых ресурсов и возможностей.",
        "icon_name": "Quantum-Computer.png",
        "passive_income": 100,
        "click_multiplier": 1,
        "base_cost": 1000,
    },

    # Defense
    {
        "name": "PLASMA SHIELD",
        "category": "defense",
        "description": "Создайте непроницаемый энергетический барьер, отражающий внешние угрозы и радиацию.",
        "icon_name": "Plasma-Shield-Generator.png",
        "passive_income": 100,
        "click_multiplier": 1,
        "base_cost": 1000,
    },
    {
        "name": "PLASMA CANNON",
        "category": "defense",
        "description": "Используйте сверхгорячую плазму как оружие для защиты от враждебных сущностей в космосе.",
        "icon_name": "Plasma-Cannon.png",
        "passive_income": 100,
        "click_multiplier": 1,
        "base_cost": 1000,
    },
    {
        "name": "STEALTH SYSTEM",
        "category": "defense",
        "description": "Изгибайте свет и энергию вокруг корабля, становясь практически невидимым.",
        "icon_name": "Stealth-System.png",
        "passive_income": 100,
        "click_multiplier": 1,
        "base_cost": 1000,
    },
    {
        "name": "SELF-REPAIR NANOBOTS",
        "category": "defense",
        "description": "Микроскопические роботы автоматически ремонтируют повреждения и обслуживают системы корабля.",
        "icon_name": "Self-Repair-Nanobots.png",
        "passive_income": 100,
        "click_multiplier": 1,
        "base_cost": 1000,
    }
]


async def seed_boosts():
    async with AsyncSessionLocal() as db:
        for boost_data in BOOST_DATA:
            # Проверяем, существует ли буст с таким именем
            result = await db.execute(
                text("SELECT id FROM boosts WHERE name = :name"),
                {"name": boost_data["name"]}
            )
            existing_boost = result.scalar_one_or_none()
            
            if not existing_boost:
                boost = Boost(**boost_data)
                db.add(boost)
        
        await db.commit()
        print("Boosts seeded successfully!")


if __name__ == "__main__":
    asyncio.run(seed_boosts())