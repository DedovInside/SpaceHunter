"""change_daily_bonuses

Revision ID: 6e55b03b0b17
Revises: 643ef50c116a
Create Date: 2025-04-20 15:15:24.438998

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '6e55b03b0b17'
down_revision: Union[str, None] = '643ef50c116a'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user_daily_bonus', sa.Column('bonus_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'user_daily_bonus', 'daily_bonuses', ['bonus_id'], ['id'])
    # ### end Alembic commands ###


def downgrade() -> None:
    """Downgrade schema."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'user_daily_bonus', type_='foreignkey')
    op.drop_column('user_daily_bonus', 'bonus_id')
    # ### end Alembic commands ###
