import asyncio
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import AsyncSessionLocal
from app.models.nft import NFT, NFTCategory
from sqlalchemy import text

# Список категорий NFT
NFT_CATEGORIES = [
    {"name": "Solar System", "description": "Planets, moons and other objects from our Solar System"},
    {"name": "Stars", "description": "Various types of stars from across the universe"},
    {"name": "Constellations", "description": "Star patterns recognized by humanity throughout history"},
    {"name": "Nebulae", "description": "Stunning cosmic clouds of gas and dust"},
    {"name": "Black Holes", "description": "The most mysterious objects in our universe"},
    {"name": "Galaxies", "description": "Star systems beyond our own Milky Way"},
    {"name": "Music", "description": "Music-themed cosmic artifacts"},
    {"name": "Cinema", "description": "Film and movie inspired cosmic items"},
    {"name": "Bonus", "description": "Special edition Space Hunter"}
]

# Список NFT с порогами заработанной валюты
NFT_DATA = [
    # Солнечная система
    {"name": "Земля", "description": "Колыбель человечества, где звёзды зовут в путь", 
     "image_path": "nfts/solar_system/Earth/Earth_Pixel_Art.png", "category_id": 1, "coins_threshold": 1},

    {"name": "Луна", "description": "Светлый спутник, хранящий тайны ночного неба", 
     "image_path": "nfts/solar_system/Moon/Moon_Pixel_Art.png", "category_id": 1, "coins_threshold": 4},

    {"name": "Венера", "description": "Огненная дева, укутанная ядовитыми облаками", 
     "image_path": "nfts/solar_system/Venus/Venus_Pixel_Art.png", "category_id": 1, "coins_threshold": 8},

    {"name": "Меркурий", "description": "Сожжённый гонец, мчащийся у края Солнца", 
     "image_path": "nfts/solar_system/Mercury/Mercury_Pixel_Art.png", "category_id": 1, "coins_threshold": 9},

    {"name": "Солнце", "description": "Пылающее сердце, дарующее жизнь и тайны", 
     "image_path": "nfts/solar_system/Sun/Sun_Pixel_Art.png", "category_id": 1, "coins_threshold": 10},

    {"name": "Марс", "description": "Красный воин, шепчущий о древних реках", 
     "image_path": "nfts/solar_system/Mars/Mars_Pixel_Art.png", "category_id": 1, "coins_threshold": 11},

    {"name": "Фобос", "description": "Тёмный страж Марса, парящий в зловещей тени", 
     "image_path": "nfts/solar_system/Phobos/Phobos_Pixel_Art.png", "category_id": 1, "coins_threshold": 13},

    {"name": "Деймос", "description": "Кроха космоса, танцующая в марсианском небе", 
     "image_path": "nfts/solar_system/Deimos/Deimos_Pixel_Art.png", "category_id": 1, "coins_threshold": 14},

    {"name": "Церера", "description": "Королева астероидов, скрывающая ледяные загадки", 
     "image_path": "nfts/solar_system/Ceres/Ceres_Pixel_Art.png", "category_id": 1, "coins_threshold": 16},

    {"name": "Юпитер", "description": "Газовый титан, чьи бури поют о вечности", 
     "image_path": "nfts/solar_system/Jupiter/Jupiter_Pixel_Art.png", "category_id": 1, "coins_threshold": 17},

    {"name": "Ио", "description": "Вулканический ад, пылающий в объятиях Юпитера", 
     "image_path": "nfts/solar_system/Io/Io_Pixel_Art.png", "category_id": 1, "coins_threshold": 19},

    {"name": "Европа", "description": "Ледяной мир, таящий океаны под коркой", 
     "image_path": "nfts/solar_system/Europa/Europa_Pixel_Art.png", "category_id": 1, "coins_threshold": 20},

    {"name": "Ганимед", "description": "Великан спутников, хранящий тайны под своей поверхностью", 
     "image_path": "nfts/solar_system/Ganymede/Ganymede_Pixel_Art.png", "category_id": 1, "coins_threshold": 21},

    {"name": "Каллисто", "description": "Израненный страж, застывший в холоде космоса", 
     "image_path": "nfts/solar_system/Callisto/Callisto_Pixel_Art.png", "category_id": 1, "coins_threshold": 22},

    {"name": "Сатурн", "description": "Властелин колец, танцующий в сиянии льда", 
     "image_path": "nfts/solar_system/Saturn/Saturn_Pixel_Art.png", "category_id": 1, "coins_threshold": 24},

    {"name": "Мимас", "description": "Ледяной страж Сатурна с кратером-оком, следящим за звёздной бездной",
     "image_path": "nfts/solar_system/Mimas/Mimas_Pixel_Art.png", "category_id": 1, "coins_threshold": 25},

    {"name": "Энцелад", "description": "Ледяной мечтатель, чьи гейзеры шепчут о скрытых океанах под коркой",
     "image_path": "nfts/solar_system/Enceladus/Enceladus_Pixel_Art.png", "category_id": 1, "coins_threshold": 26},

    {"name": "Титан", "description": "Мир метановых озёр, манящий чужеродной красотой", 
     "image_path": "nfts/solar_system/Titan/Titan_Pixel_Art.png", "category_id": 1, "coins_threshold": 27},

    {"name": "Гиперион", "description": "Космическая губка, танцующая в хаотичном вальсе вокруг Сатурна",
     "image_path": "nfts/solar_system/Hyperion/Hyperion_Pixel_Art.png", "category_id": 1, "coins_threshold": 28},

     {"name": "Япет", "description": "Двуликий страж, разделённый светом и мраком",
      "image_path": "nfts/solar_system/Iapetus/Iapetus_Pixel_Art.png", "category_id": 1, "coins_threshold": 29},

    {"name": "Уран", "description": "Ледяной гигант, катящийся на боку под звёздным ветром", 
     "image_path": "nfts/solar_system/Uranus/Uranus_Pixel_Art.png", "category_id": 1, "coins_threshold": 30},

    {"name": "Миранда", "description": "Спутник, чья израненная поверхность хранит следы древних катаклизмов",
     "image_path": "nfts/solar_system/Miranda/Miranda_Pixel_Art.png", "category_id": 1, "coins_threshold": 31},

    {"name": "Нептун", "description": "Синий владыка, чьи ветра поют о бездне", 
     "image_path": "nfts/solar_system/Neptune/Neptune_Pixel_Art.png", "category_id": 1, "coins_threshold": 32},

    {"name": "Тритон", "description": "Ледяной спутник, несущийся к Нептуну, с гейзерами, хранящими следы его странствий",
     "image_path": "nfts/solar_system/Triton/Triton_Pixel_Art.png", "category_id": 1, "coins_threshold": 33},

    {"name": "Плутон", "description": "Карлик на краю, с сердцем из вечного льда", 
     "image_path": "nfts/solar_system/Pluto/Pluto_Pixel_Art.png", "category_id": 1, "coins_threshold": 34},

    {"name": "Хаумеа", "description": "Броская странница с вытянутым сердцем, кружащаяся быстрее всех. Танцовщица ледяного пояса Койпера",
     "image_path": "nfts/solar_system/Haumea/Haumea_Pixel_Art.png", "category_id": 1, "coins_threshold": 35},

    {"name": "Макемаке", "description": "Страж ледяных границ Солнечной системы, скрытый в бездне пояса Койпера, несущий тайны древних миров",
     "image_path": "nfts/solar_system/Makemake/Makemake_Pixel_Art.png", "category_id": 1, "coins_threshold": 36},

    {"name": "Комета Галлея", "description": "Звёздный вестник, пылающий раз в столетие", 
     "image_path": "nfts/solar_system/Halley's_Comet/Halley's_Comet_Pixel_Art.png", "category_id": 1, "coins_threshold": 37},

    {"name": "Седна", "description": "Красный изгнанник, танцующий в пустоте космоса", 
     "image_path": "nfts/solar_system/Sedna/Sedna_Pixel_Art.png", "category_id": 1, "coins_threshold": 38},
    
    # Музыкальные отсылки
    {"name": "Boston Boston 1976", "description": "Гитарный рок 70-х, зовущий к звёздам с Земли", 
     "image_path": "nfts/music/Boston_Boston_1976/Boston_Boston_1976_Pixel_Art.png", "category_id": 7, "coins_threshold": 2},

    {"name": "Земляне Трава у дома", "description": "Напевы родной Земли, где звёзды кажутся домом", 
     "image_path": "nfts/music/Zemlyane_Grass_By_The_Home/Zemlyane_Grass_By_The_Home_Pixel_Art.png", "category_id": 7, "coins_threshold": 3},

    {"name": "ELO Ticket To The Moon", "description": "Мелодия лунного пути, манящая в ночное небо", 
     "image_path": "nfts/music/ELO_Ticket_To_The_Moon/ELO_Ticket_To_The_Moon_Pixel_Art.png", "category_id": 7, "coins_threshold": 5},

    {"name": "David Bowie Space Oddity", "description": "Песнь астронавта, теряющегося в космической тьме", 
     "image_path": "nfts/music/David_Bowie_Space_Oddity/David_Bowie_Space_Oddity_Pixel_Art.png", "category_id": 7, "coins_threshold": 7},

    {"name": "Elton John Rocket Man", "description": "Гимн звёздного странника, тоскующего в пустоте", 
     "image_path": "nfts/music/Elton_John_Rocket_Man/Elton_John_Rocket_Man_Pixel_Art.png", "category_id": 7, "coins_threshold": 23},

    {"name": "Europe Final Countdown", "description": "Марш отважных, готовых к прыжку в космос", 
     "image_path": "nfts/music/Europe_Final_Countdown/Europe_Final_Countdown_Pixel_Art.png", "category_id": 7, "coins_threshold": 39},

    {"name": "Space Magic Fly", "description": "Космический ритм, уносящий за грань звёзд", 
     "image_path": "nfts/music/Space_Magic_Fly/Space_Magic_Fly_Pixel_Art.png", "category_id": 7, "coins_threshold": 63},
    
    # Киноотсылки
    {"name": "Гравитация", "description": "Выживание на орбите среди обломков, где каждая секунда - борьба за жизнь", 
     "image_path": "nfts/cinema/Gravity/Gravity_Pixel_Art.png", "category_id": 8, "coins_threshold": 6},

    {"name": "Марсианин", "description": "Один против красных пустынь, борющийся за жизнь", 
     "image_path": "nfts/cinema/The_Martian/The_Martian_Pixel_Art.png", "category_id": 8, "coins_threshold": 12},

    {"name": "Армагеддон", "description": "Когда на Землю летит астероид, спасать планету отправляют бурильщиков", 
     "image_path": "nfts/cinema/Armageddon/Armageddon_Pixel_Art.png", "category_id": 8, "coins_threshold": 15},

    {"name": "2001 год: Космическая одиссея", "description": "Монолит зовёт, открывая путь к непостижимому", 
     "image_path": "nfts/cinema/2001_A_Space_Odyssey/2001_A_Space_Odyssey_Pixel_Art.png", "category_id": 8, "coins_threshold": 18},

    {"name": "Солярис", "description": "Океан разума, читающий души смельчаков", 
     "image_path": "nfts/cinema/Solaris/Solaris_Pixel_Art.png", "category_id": 8, "coins_threshold": 41},

    {"name": "Кин-дза-дза", "description": "Пыльный мир абсурда (а может и не совсем...), где цака решает всё", 
     "image_path": "nfts/cinema/Kin_dza_dza/Kin_dza_dza_Pixel_Art.png", "category_id": 8, "coins_threshold": 64},

    {"name": "Пассажиры", "description": "Межзвёздный перелёт длиной в столетия... и внезапное пробуждение", 
     "image_path": "nfts/cinema/Passengers/Passengers_Pixel_Art.png", "category_id": 8, "coins_threshold": 65},

    {"name": "Чужой", "description": "На далёкой планете тебя никто не услышит... особенно, когда на борту — нечто чужое", 
     "image_path": "nfts/cinema/Alien/Alien_Pixel_Art.png", "category_id": 8, "coins_threshold": 66},

    {"name": "Стражи галактики", "description": "Немного хулиганства, немного героизма и енот с пушкой — спасают галактику", 
     "image_path": "nfts/cinema/Guardians_of_Galaxy/Guardians_of_Galaxy_Pixel_Art.png", "category_id": 8, "coins_threshold": 97},

    {"name": "Звёздные войны", "description": "Давным-давно, в далёкой-далёкой галактике… началась великая космическая сага", 
     "image_path": "nfts/cinema/Star_Wars/Star_Wars_Pixel_Art.png", "category_id": 8, "coins_threshold": 98},

    {"name": "Интерстеллар", "description": "Путь через бездну, где любовь побеждает время", 
     "image_path": "nfts/cinema/Interstellar/Interstellar_Pixel_Art.png", "category_id": 8, "coins_threshold": 110},
    
    # Звезды
    {"name": "Альфа Центавра", "description": "Тройной маяк, манящий к ближайшим звёздам", 
     "image_path": "nfts/stars/Alpha_Centauri/Alpha_Centauri_Pixel_Art.png", "category_id": 2, "coins_threshold": 40},

    {"name": "Звезда Барнарда", "description": "Маленький одинокий красный беглец, мчащийся в космической ночи", 
     "image_path": "nfts/stars/Barnard's_Star/Barnard's_Star_Pixel_Art.png", "category_id": 2, "coins_threshold": 42},

    {"name": "Сириус", "description": "Ярчайший страж, сияющий над горизонтом", 
     "image_path": "nfts/stars/Sirius/Sirius_Pixel_Art.png", "category_id": 2, "coins_threshold": 43},

    {"name": "Вега", "description": "Звезда Лиры, поющая о древних мирах", 
     "image_path": "nfts/stars/Vega/Vega_Pixel_Art.png", "category_id": 2, "coins_threshold": 44},

    {"name": "Поллукс", "description": "Оранжевый гигант, взирающий на Близнецов", 
     "image_path": "nfts/stars/Pollux/Pollux_Pixel_Art.png", "category_id": 2, "coins_threshold": 45},

    {"name": "Арктур", "description": "Красный титан, ведущий к созвездию Волопаса", 
     "image_path": "nfts/stars/Arcturus/Arcturus_Pixel_Art.png", "category_id": 2, "coins_threshold": 46},

    {"name": "Альдебаран", "description": "Глаз Тельца, пылающий в звёздной глубине", 
     "image_path": "nfts/stars/Aldebaran/Aldebaran_Pixel_Art.png", "category_id": 2, "coins_threshold": 47},

    {"name": "Полярная звезда", "description": "Неподвижный маяк, указывающий путь странникам", 
     "image_path": "nfts/stars/Polaris/Polaris_Pixel_Art.png", "category_id": 2, "coins_threshold": 67},

    {"name": "Антарес", "description": "Кровавое сердце Скорпиона, пылающее яростью", 
     "image_path": "nfts/stars/Antares/Antares_Pixel_Art.png", "category_id": 2, "coins_threshold": 69},

    {"name": "Бетельгейзе", "description": "Красный исполин, ждущий своей последней вспышки", 
     "image_path": "nfts/stars/Betelgeuse/Betelgeuse_Pixel_Art.png", "category_id": 2, "coins_threshold": 71},

    {"name": "Ригель", "description": "Голубой гигант, сияющий в ноге Ориона", 
     "image_path": "nfts/stars/Rigel/Rigel_Pixel_Art.png", "category_id": 2, "coins_threshold": 73},

    {"name": "VY Большого Пса", "description": "Чудовищная звезда, которая делает Солнце карликом. Гигант среди гигантов", 
     "image_path": "nfts/stars/VY_Canis_Majoris/VY_Canis_Majoris_Pixel_Art.png", "category_id": 2, "coins_threshold": 80},

    {"name": "Эта Киля", "description": "Звезда с характером — уже взрывалась, но ещё не закончила! Один из самых опасных «тигров» нашей галактики", 
     "image_path": "nfts/stars/Eta_Carinae/Eta_Carinae_Pixel_Art.png", "category_id": 2, "coins_threshold": 85},

    {"name": "WR-104", "description": "Танцующий вихрь звёздной судьбы, запечатлённый в спирали газа. Космический маяк перемен, чьё пламя может озарить галактику последним всплеском",
     "image_path": "nfts/stars/WR-104/WR-104_Pixel_Art.png", "category_id": 2, "coins_threshold": 86},

     {"name": "UY Щита", "description": "потухающее пламя космоса, чья необъятная аура окутывает тьму. Гипергигант, чей огненный лик мерцает на грани вечности",
      "image_path": "nfts/stars/UY_Scuti/UY_Scuti_Pixel_Art.png", "category_id": 2, "coins_threshold": 87},

    {"name": "Стивенсон 2-18", "description": "Настолько огромная, что если бы Солнце было горошиной — она была бы стадионом. Гипергигант, где даже свету нужно время, чтобы пройтись по кругу", 
     "image_path": "nfts/stars/Stephenson_2-18/Stephenson_2-18_Pixel_Art.png", "category_id": 2, "coins_threshold": 88},

    {"name": "Пистолет" , "description": "космическая диковина, скрытая за густыми облаками межзвёздного газа. Огненное сердце Галактики, чья энергия способна озарить тысячи миров",
     "image_path": "nfts/stars/Pistol/Pistol_Pixel_Art.png", "category_id": 2, "coins_threshold": 89},

    {"name": "Денеб", "description": "Сияющий маяк в космосе, ведущий странников по звёздным дорогам. Ослепительное сердце Лебедя, освещающее дальние просторы Млечного Пути",
     "image_path": "nfts/stars/Deneb/Deneb_Pixel_Art.png", "category_id": 2, "coins_threshold": 93},

    {"name": "R136A1", "description": "сияющий исполин, повелитель звёздных огней. Самая массивная известная звезда, чей яростный пылающий дух освещает юные туманности галактики",
     "image_path": "nfts/stars/R136A1/R136A1_Pixel_Art.png", "category_id": 2, "coins_threshold": 95},
    
    # Созвездия
    {"name": "Большая Медведица", "description": "TЗвезда навигации и бабушкиных сказок. Узнаваемый ковш, спрятанный в созвездии грозного медведя", 
        "image_path": "nfts/constellations/Ursa_Major/Ursa_Major_Pixel_Art.png", "category_id": 3, "coins_threshold": 48},

    {"name": "Телец", "description": "Рога вперёд! Созвездие, в котором прячется яркое Плеяде и дух упрямства", 
        "image_path": "nfts/constellations/Taurus/Taurus_Pixel_Art.png", "category_id": 3, "coins_threshold": 49},

    {"name": "Овен", "description": "Звёздный баран, который бодро мчится сквозь ночное небо с древних времён", 
        "image_path": "nfts/constellations/Aries/Aries_Pixel_Art.png", "category_id": 3, "coins_threshold": 50},

    {"name": "Близнецы", "description": "Братья Кастор и Поллукс — небесные близнецы, освещающие путь путникам", 
        "image_path": "nfts/constellations/Gemini/Gemini_Pixel_Art.png", "category_id": 3, "coins_threshold": 51},

    {"name": "Рыбы", "description": "Космические рыбы, плывущие в звёздных волнах", 
        "image_path": "nfts/constellations/Pisces/Pisces_Pixel_Art.png", "category_id": 3, "coins_threshold": 52},

    {"name": "Рак", "description": "Скромное созвездие с ракообразным характером. Спокойное, но со своими клешнями", 
        "image_path": "nfts/constellations/Cancer/Cancer_Pixel_Art.png", "category_id": 3, "coins_threshold": 53},

    {"name": "Лев", "description": "Царь зверей и небес. Мощная грива из звёзд — не перепутаешь!", 
        "image_path": "nfts/constellations/Leo/Leo_Pixel_Art.png", "category_id": 3, "coins_threshold": 54},

    {"name": "Весы", "description": "Единственное небесное созвездие — объект, а не существо. Идеальный баланс в космосе", 
        "image_path": "nfts/constellations/Libra/Libra_Pixel_Art.png", "category_id": 3, "coins_threshold": 55},

    {"name": "Северная Корона", "description": "Венец из звёзд, сверкающий в вечной тьме. Космическая диадема, что возвышается над ночным небом",
        "image_path": "nfts/constellations/Corona_Borealis/Corona_Borealis_Pixel_Art.png", "category_id": 3, "coins_threshold": 56},

    {"name": "Пегас", "description": "Крылатый вестник небес стремительного полёта, где звёзды складываются в силуэт легендарного коня",
        "image_path": "nfts/constellations/Pegasus/Pegasus_Pixel_Art.png", "category_id": 3, "coins_threshold": 57},

    {"name": "Кассиопея", "description": "Королева, сидящая на троне из звёзд. Узнается по форме «W» на небе", 
        "image_path": "nfts/constellations/Cassiopeia/Cassiopeia_Pixel_Art.png", "category_id": 3, "coins_threshold": 58},

    {"name": "Дева", "description": "Созвездие, полное спокойствия и загадки. Символ чистоты среди звёзд", 
        "image_path": "nfts/constellations/Virgo/Virgo_Pixel_Art.png", "category_id": 3, "coins_threshold": 59},

    {"name": "Козерог", "description": "Космический козёл, что ведёт к звёздным вершинам. Созвездие, полное загадок и тайн",
        "image_path": "nfts/constellations/Capricornus/Capricornus_Pixel_Art.png", "category_id": 3, "coins_threshold": 60},

    {"name": "Геркулес", "description": "Могущественный герой, чьи подвиги освещают небосвод. Созвездие силы и мужества",
        "image_path": "nfts/constellations/Hercules/Hercules_Pixel_Art.png", "category_id": 3, "coins_threshold": 61},

    {"name": "Водолей", "description": "Водяной носитель, что проливает звёздные реки. Созвездие, полное жизни и движения",
        "image_path": "nfts/constellations/Aquarius/Aquarius_Pixel_Art.png", "category_id": 3, "coins_threshold": 62},

    {"name": "Малая Медведица", "description": "Младшая сестра Большой Медведицы. Здесь живёт Полярная звезда — наш вечный ориентир", 
        "image_path": "nfts/constellations/Ursa_Minor/Ursa_Minor_Pixel_Art.png", "category_id": 3, "coins_threshold": 68},

    {"name": "Скорпион", "description": "Изогнутый хвост, жало звёзд — одно из самых эффектных созвездий на южном небе", 
        "image_path": "nfts/constellations/Scorpius/Scorpius_Pixel_Art.png", "category_id": 3, "coins_threshold": 70},

    {"name": "Орион", "description": "Могучий охотник со звёздным поясом. Его узнает даже новичок в астрономии", 
        "image_path": "nfts/constellations/Orion/Orion_Pixel_Art.png", "category_id": 3, "coins_threshold": 74},

    {"name": "Стрелец", "description": "Натянутая звёздная тетива. Целится в центр Галактики — прямо в сердце Млечного Пути", 
        "image_path": "nfts/constellations/Sagittarius/Sagittarius_Pixel_Art.png", "category_id": 3, "coins_threshold": 91},

    {"name": "Лебедь", "description": "Летящий в космосе лебедь, что расправляет свои звёздные крылья",
        "image_path": "nfts/constellations/Cygnus/Cygnus_Pixel_Art.png", "category_id": 3, "coins_threshold": 92},
    
    # Туманности
    {"name": "Туманность Улитка", "description": "«Глаз Бога», смотрящий из глубин космоса. Планетарная туманность с почти гипнотическим взглядом", 
     "image_path": "nfts/nebulae/Helix/Helix_Pixel_Art.png", "category_id": 4, "coins_threshold": 72},

    {"name": "Туманность Орион", "description": "Звёздная родильня. Один из самых ярких и живых уголков ночного неба", 
     "image_path": "nfts/nebulae/Orion/Orion_Pixel_Art.png", "category_id": 4, "coins_threshold": 75},

    {"name": "Туманность Конская Голова", "description": "Силуэт лошади, вырезанный из пыли и газа. Мрачная красота на краю Ориона", 
     "image_path": "nfts/nebulae/Horsehead/Horsehead_Pixel_Art.png", "category_id": 4, "coins_threshold": 76},

    {"name": "Туманность Кольцо", "description": "Идеальный космический обруч — остаток от звезды, которая не ушла тихо", 
     "image_path": "nfts/nebulae/Ring/Ring_Pixel_Art.png", "category_id": 4, "coins_threshold": 78},

    {"name": "Туманность Кошачий Глаз", "description": "Слоистая, сложная, почти мистическая. Как будто инопланетный кот следит за тобой сквозь пространство", 
     "image_path": "nfts/nebulae/Cat's_Eye/Cat's_Eye_Pixel_Art.png", "category_id": 4, "coins_threshold": 79},

    {"name": "Туманность Лагуна", "description": "Тепло, свет и бурлящее рождение звёзд — космический пляж без гравитации", 
     "image_path": "nfts/nebulae/Lagoon/Lagoon_Pixel_Art.png", "category_id": 4, "coins_threshold": 81},

    {"name": "Туманность Розетка", "description": "Гигантский космический цветок, распустившийся в созвездии Единорога. Красиво… и пыльно", 
     "image_path": "nfts/nebulae/Rosette/Rosette_Pixel_Art.png", "category_id": 4, "coins_threshold": 82},

    {"name": "Крабовидная туманность", "description": "Останки звезды, взорвавшейся с размахом. Пульсар внутри — как сердце, которое всё ещё стучит", 
     "image_path": "nfts/nebulae/Crab/Crab_Pixel_Art.png", "category_id": 4, "coins_threshold": 83},

    {"name": "Туманность Орёл", "description": "Дом «Столпов Творения» — тех самых. Место, где рождаются звёзды и начинается поэзия Вселенной", 
     "image_path": "nfts/nebulae/Eagle/Eagle_Pixel_Art.png", "category_id": 4, "coins_threshold": 84},
    
    # Черные дыры
    {"name": "Gaia BH1", "description": "Самая близкая к Земле чёрная дыра — почти сосед по галактике. Тихая, незаметная… но с характером", 
     "image_path": "nfts/black_holes/Gaia_BH1/Gaia_BH1_Pixel_Art.png", "category_id": 5, "coins_threshold": 77},

    {"name": "Sagittarius A*", "description": "Сердце Млечного Пути. Здесь танцуют звёзды, а время и пространство сходят с ума", 
     "image_path": "nfts/black_holes/Sagittarius_А-star/Sagittarius_A-star_Pixel_Art.png", "category_id": 5, "coins_threshold": 90},

    {"name": "Messier 87", "description": "Та самая, с первого фото. Тень воронки, пронзившая космос и новостные ленты", 
     "image_path": "nfts/black_holes/Messier_87/Messier_87_Pixel_Art.png", "category_id": 5, "coins_threshold": 107},

    {"name": "Phoenix A*", "description": "Абсолютный рекордсмен. Если бы чёрные дыры соревновались в весе — он бы вёл вечный подкаст один", 
     "image_path": "nfts/black_holes/Phoenix_A-star/Phoenix_A-star_Pixel_Art.png", "category_id": 5, "coins_threshold": 111},

    {"name": "TON 618", "description": "Монстр из глубин Вселенной. Масса — миллиарды солнц, аппетит — нескончаемый", 
     "image_path": "nfts/black_holes/TON_618/TON_618_Pixel_Art.png", "category_id": 5, "coins_threshold": 112},
    
    # Галактики
    {"name": "Большое Магелланово Облако", "description": "Звёздный сосед, танцующий в тени Млечного Пути", 
     "image_path": "nfts/galaxies/Large_Magellanic_Cloud/Large_Magellanic_Cloud_Pixel_Art.png", "category_id": 6, "coins_threshold": 94},

    {"name": "Малое Магелланово Облако", "description": "Младшая сестра, сияющая в южных - Карликовый спутник, хранящий древние звёзды", 
     "image_path": "nfts/galaxies/Small_Magellanic_Cloud/Small_Magellanic_Cloud_Pixel_Art.png", "category_id": 6, "coins_threshold": 96},

    {"name": "Андромеда", "description": "Спиральная королева, ждущая слияния с нашей галактикой", 
     "image_path": "nfts/galaxies/Andromeda/Andromeda_Pixel_Art.png", "category_id": 6, "coins_threshold": 99},

    {"name": "Галактика треугольника", "description": "Тихий звёздный узор, сотканный в созвездии Треугольника, манит своей красотой", 
     "image_path": "nfts/galaxies/Triangulum/Triangulum_Pixel_Art.png", "category_id": 6, "coins_threshold": 100},

    {"name": "Галактика Боде", "description": "Звёздный вихрь, названный в честь первооткрывателя", 
     "image_path": "nfts/galaxies/Bode's_Galaxy/Bode's_Galaxy_Pixel_Art.png", "category_id": 6, "coins_threshold": 101},

    {"name": "Галактика Сигара", "description": "Звёздный факел, пылающий яростным рождением новых солнц", 
     "image_path": "nfts/galaxies/The_Cigar/The_Cigar_Pixel_Art.png", "category_id": 6, "coins_threshold": 102},

    {"name": "Центавр А", "description": "Радиогалактика, чьи невидимые волны кричат о мощи далёких миров", 
     "image_path": "nfts/galaxies/Centaurus_A/Centaurus_A_Pixel_Art.png", "category_id": 6, "coins_threshold": 103},

    {"name": "Галактика Чёрный Глаз", "description": "Спираль с тёмным шрамом, хранящая тайны космоса", 
     "image_path": "nfts/galaxies/The_Black_Eye/The_Black_Eye_Pixel_Art.png", "category_id": 6, "coins_threshold": 104},

    {"name": "Галактика Сомбреро", "description": "Космическая шляпа, увенчанная пыльным ореолом и сиянием звёзд", 
     "image_path": "nfts/galaxies/Sombrero/Sombrero_Pixel_Art.png", "category_id": 6, "coins_threshold": 105},

    {"name": "Галактика Антенны", "description": "Танец столкновений, рождающий хаос и звёзды", 
     "image_path": "nfts/galaxies/The_Antennae/The_Antennae_Pixel_Art.png", "category_id": 6, "coins_threshold": 106},

    {"name": "Галактика Водоворот", "description": "Спиральный вихрь, закручивающий звёзды в бесконечный танец",
     "image_path": "nfts/galaxies/Whirlpool/Whirlpool_Pixel_Art.png", "category_id": 6, "coins_threshold": 108},

    {"name": "Галактика Вертушка", "description": "Спиральная хороводница Вселенной, раскручивающая свои звёздные рукава в грациозном танце. Кружится в пустоте, разбрызгивая свет по своим космическим дорогам",
     "image_path": "nfts/galaxies/Pinwheel/Pinwheel_Pixel_Art.png", "category_id": 6, "coins_threshold": 109},




    # Бонусные

    
    
]


async def seed_nfts():
    """Заполнить базу данных категориями NFT и NFT."""
    async with AsyncSessionLocal() as db:
        try:
            # Проверяем, есть ли уже категории
            result = await db.execute(text("SELECT COUNT(*) FROM nft_categories"))
            count = result.scalar_one()
            
            # Добавляем категории и получаем их ID
            category_id_map = {}
            if count == 0:
                for i, category_data in enumerate(NFT_CATEGORIES, start=1):
                    category = NFTCategory(**category_data)
                    db.add(category)
                    # Сохраняем оригинальную позицию и имя категории
                    category_id_map[i] = category
                
                await db.commit()
                print(f"Added {len(NFT_CATEGORIES)} NFT categories")
                
                # Получаем реальные ID после commit
                for i, category in category_id_map.items():
                    await db.refresh(category)
                    category_id_map[i] = category.id
            else:
                # Получаем существующие категории по имени
                for i, category_data in enumerate(NFT_CATEGORIES, start=1):
                    result = await db.execute(
                        text("SELECT id FROM nft_categories WHERE name = :name"),
                        {"name": category_data["name"]}
                    )
                    real_id = result.scalar_one_or_none()
                    if real_id:
                        category_id_map[i] = real_id
                
                print(f"Using existing {len(category_id_map)} NFT categories")
            
            # Проверяем, есть ли уже NFT
            result = await db.execute(text("SELECT COUNT(*) FROM nfts"))
            count = result.scalar_one()
            
            # Если NFT нет, добавляем их с правильными ID категорий
            if count == 0:
                for nft_data in NFT_DATA:
                    # Заменяем hardcoded category_id на реальный ID из БД
                    orig_category_id = nft_data["category_id"]
                    if orig_category_id in category_id_map:
                        nft_data = dict(nft_data)  # Копируем, чтобы не менять оригинал
                        nft_data["category_id"] = category_id_map[orig_category_id]
                        db.add(NFT(**nft_data))
                    else:
                        print(f"Warning: Category ID {orig_category_id} not found for NFT {nft_data['name']}")
                
                await db.commit()
                print(f"Added {len(NFT_DATA)} NFTs")
            else:
                print(f"Database already contains {count} NFTs")
                
        except Exception as e:
            await db.rollback()
            print(f"Error: {e}")
            raise


if __name__ == "__main__":
    asyncio.run(seed_nfts())