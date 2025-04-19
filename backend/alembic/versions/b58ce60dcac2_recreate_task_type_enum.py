"""recreate_task_type_enum

Revision ID: b58ce60dcac2
Revises: 8b137c00619e
Create Date: 2025-04-20 00:01:02.511278

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = 'b58ce60dcac2'
down_revision: Union[str, None] = '8b137c00619e'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # 1. Сначала изменим тип столбца на TEXT временно
    op.alter_column('tasks', 'type',
                   type_=sa.Text(),
                   postgresql_using='type::text')
    
    # 2. Удаляем старый enum
    op.execute('DROP TYPE IF EXISTS tasktypeenum')
    
    # 3. Создаем новый enum с правильными значениями (в нижнем регистре)
    tasktypeenum = postgresql.ENUM('daily', 'permanent', name='tasktypeenum')
    tasktypeenum.create(op.get_bind())
    
    # 4. Меняем тип столбца обратно на новый enum
    op.alter_column('tasks', 'type',
                   type_=tasktypeenum,
                   postgresql_using='type::tasktypeenum')


def downgrade() -> None:
    # 1. Снова временно меняем на TEXT
    op.alter_column('tasks', 'type',
                   type_=sa.Text(),
                   postgresql_using='type::text')
    
    # 2. Удаляем новый enum
    op.execute('DROP TYPE IF EXISTS tasktypeenum')
    
    # 3. Восстанавливаем старый enum (с значениями в верхнем регистре)
    tasktypeenum = postgresql.ENUM('DAILY', 'PERMANENT', name='tasktypeenum')
    tasktypeenum.create(op.get_bind())
    
    # 4. Возвращаем старый тип столбца
    op.alter_column('tasks', 'type',
                   type_=tasktypeenum,
                   postgresql_using='type::tasktypeenum')