# """Add is_resume_required, is_work_history_required, is_photo_required columns to jobs

# Revision ID: 9ae11faef384
# Revises: 58e88dbb0e16
# Create Date: 2024-10-24 07:16:39.629393

# """
# from alembic import op
# import sqlalchemy as sa


# # revision identifiers, used by Alembic.
# revision = '9ae11faef384'
# down_revision = '58e88dbb0e16'
# branch_labels = None
# depends_on = None


# def upgrade():
#     # applicationsテーブルにstatusカラムを追加
#     with op.batch_alter_table('applications', schema=None) as batch_op:
#         # statusカラムの追加
#         batch_op.add_column(sa.Column('status', sa.String(length=20), nullable=False, server_default='選考中'))

#         # その他のカラムの処理
#         batch_op.add_column(sa.Column('name', sa.String(length=100), nullable=True))
#         batch_op.add_column(sa.Column('address', sa.String(length=200), nullable=True))
#         batch_op.add_column(sa.Column('age', sa.Integer(), nullable=True))
#         batch_op.add_column(sa.Column('gender', sa.String(length=10), nullable=True))
#         batch_op.add_column(sa.Column('industry', sa.String(length=50), nullable=True))
#         batch_op.add_column(sa.Column('job_title', sa.String(length=50), nullable=True))
#         batch_op.add_column(sa.Column('years_of_experience', sa.Integer(), nullable=True))
#         batch_op.add_column(sa.Column('resume', sa.String(length=200), nullable=True))
#         batch_op.add_column(sa.Column('work_history', sa.String(length=200), nullable=True))
#         batch_op.add_column(sa.Column('photo', sa.String(length=200), nullable=True))
    
#     # デフォルト値を設定
#     op.execute('UPDATE applications SET name = \'Unknown\' WHERE name IS NULL')
    
#     # NOT NULL 制約を追加
#     with op.batch_alter_table('applications', schema=None) as batch_op:
#         batch_op.alter_column('name', existing_type=sa.String(length=100), nullable=False)

#     # jobsテーブルに新しいカラムを追加
#     with op.batch_alter_table('jobs', schema=None) as batch_op:
#         batch_op.add_column(sa.Column('is_resume_required', sa.Boolean(), nullable=True))
#         batch_op.add_column(sa.Column('is_work_history_required', sa.Boolean(), nullable=True))
#         batch_op.add_column(sa.Column('is_photo_required', sa.Boolean(), nullable=True))


# def downgrade():
#     # applicationsテーブルからstatusカラムを削除
#     with op.batch_alter_table('applications', schema=None) as batch_op:
#         batch_op.drop_column('status')
    
#     # applicationsテーブルの他のカラムを削除
#     with op.batch_alter_table('applications', schema=None) as batch_op:
#         batch_op.drop_column('photo')
#         batch_op.drop_column('work_history')
#         batch_op.drop_column('resume')
#         batch_op.drop_column('years_of_experience')
#         batch_op.drop_column('job_title')
#         batch_op.drop_column('industry')
#         batch_op.drop_column('gender')
#         batch_op.drop_column('age')
#         batch_op.drop_column('address')
#         batch_op.drop_column('name')

#     # jobsテーブルから新しいカラムを削除
#     with op.batch_alter_table('jobs', schema=None) as batch_op:
#         batch_op.drop_column('is_photo_required')
#         batch_op.drop_column('is_work_history_required')
#         batch_op.drop_column('is_resume_required')

#     # ### end Alembic commands ###
