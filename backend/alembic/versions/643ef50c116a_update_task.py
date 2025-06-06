"""update task

Revision ID: 643ef50c116a
Revises: 6850febd9da1
Create Date: 2025-04-20 11:23:45.484816

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '643ef50c116a'
down_revision: Union[str, None] = '6850febd9da1'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('user_tasks_user_id_fkey', 'user_tasks', type_='foreignkey')
    op.create_foreign_key(None, 'user_tasks', 'users', ['user_id'], ['id'])
    # ### end Alembic commands ###


def downgrade() -> None:
    """Downgrade schema."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'user_tasks', type_='foreignkey')
    op.create_foreign_key('user_tasks_user_id_fkey', 'user_tasks', 'users', ['user_id'], ['telegram_id'])
    # ### end Alembic commands ###
