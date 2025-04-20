"""change_task_type_to_string

Revision ID: 144e440f1e18
Revises: b58ce60dcac2
Create Date: 2025-04-20 10:26:18.410538

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql


# revision identifiers, used by Alembic.
revision: str = '144e440f1e18'
down_revision: Union[str, None] = 'b58ce60dcac2'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

def upgrade() -> None:
    # 1. Преобразуем столбец в текст
    op.alter_column('tasks', 'type',
                   type_=sa.String(),
                   existing_type=postgresql.ENUM('daily', 'permanent', name='tasktypeenum'),
                   postgresql_using='type::text')
    
    # 2. Удаляем enum тип
    op.execute('DROP TYPE tasktypeenum')
    
    # 3. Изменяем тип reward на Integer
    op.alter_column('tasks', 'reward',
                   type_=sa.Integer(),
                   existing_type=sa.DOUBLE_PRECISION(precision=53),
                   existing_nullable=True)

def downgrade() -> None:
    # 1. Создаем enum тип заново
    op.execute("CREATE TYPE tasktypeenum AS ENUM ('daily', 'permanent')")
    
    # 2. Преобразуем столбец обратно в enum
    op.alter_column('tasks', 'type',
                   type_=postgresql.ENUM('daily', 'permanent', name='tasktypeenum'),
                   existing_type=sa.String(),
                   postgresql_using="type::tasktypeenum")
    
    # 3. Возвращаем тип reward
    op.alter_column('tasks', 'reward',
                   type_=sa.DOUBLE_PRECISION(precision=53),
                   existing_type=sa.Integer(),
                   existing_nullable=True)