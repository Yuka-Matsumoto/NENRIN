"""Recreate migration for status and other columns

Revision ID: 65d5bfd76a4e
Revises: 9ae11faef384
Create Date: 2024-10-24 12:09:45.753327

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '65d5bfd76a4e'
down_revision = '9ae11faef384'
branch_labels = None
depends_on = None


def upgrade():
    with op.batch_alter_table('applications', schema=None) as batch_op:
        # カラムを追加 (まずはデフォルト値を指定)
        batch_op.add_column(sa.Column('status', sa.String(length=20), nullable=True, server_default='選考中'))

    # 既存の NULL の行にデフォルト値を設定
    op.execute('UPDATE applications SET status = \'選考中\' WHERE status IS NULL')

    # その後、NOT NULL 制約を追加
    with op.batch_alter_table('applications', schema=None) as batch_op:
        batch_op.alter_column('status', existing_type=sa.String(length=20), nullable=False)


def downgrade():
    with op.batch_alter_table('applications', schema=None) as batch_op:
        batch_op.drop_column('status')

    # ### end Alembic commands ###
