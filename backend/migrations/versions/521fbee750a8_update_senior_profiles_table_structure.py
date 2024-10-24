"""Update senior_profiles table structure

Revision ID: 521fbee750a8
Revises: 6710d44b73cf
Create Date: 2024-10-20 07:11:51.243981

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '521fbee750a8'
down_revision = '6710d44b73cf'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('senior_profiles', schema=None) as batch_op:
        batch_op.add_column(sa.Column('industry', sa.String(length=50), nullable=True))
        batch_op.add_column(sa.Column('job_title', sa.String(length=50), nullable=True))
        batch_op.add_column(sa.Column('years_of_experience', sa.Integer(), nullable=True))
        batch_op.add_column(sa.Column('currently_employed', sa.Boolean(), nullable=True))
        batch_op.add_column(sa.Column('currently_studying', sa.Boolean(), nullable=True))
        batch_op.add_column(sa.Column('has_hobby', sa.Boolean(), nullable=True))
        batch_op.add_column(sa.Column('lives_alone', sa.Boolean(), nullable=True))
        batch_op.add_column(sa.Column('goes_out_once_a_week', sa.Boolean(), nullable=True))
        batch_op.drop_column('career')
        batch_op.drop_column('license')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('senior_profiles', schema=None) as batch_op:
        batch_op.add_column(sa.Column('license', sa.TEXT(), autoincrement=False, nullable=True))
        batch_op.add_column(sa.Column('career', sa.TEXT(), autoincrement=False, nullable=True))
        batch_op.drop_column('goes_out_once_a_week')
        batch_op.drop_column('lives_alone')
        batch_op.drop_column('has_hobby')
        batch_op.drop_column('currently_studying')
        batch_op.drop_column('currently_employed')
        batch_op.drop_column('years_of_experience')
        batch_op.drop_column('job_title')
        batch_op.drop_column('industry')

    # ### end Alembic commands ###
