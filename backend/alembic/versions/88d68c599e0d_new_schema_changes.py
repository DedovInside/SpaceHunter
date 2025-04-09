"""New schema changes

Revision ID: 88d68c599e0d
Revises: 7fae77c4b99a
Create Date: 2025-04-09 14:15:12.387137

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '88d68c599e0d'
down_revision: Union[str, None] = '7fae77c4b99a'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    pass


def downgrade() -> None:
    """Downgrade schema."""
    pass
