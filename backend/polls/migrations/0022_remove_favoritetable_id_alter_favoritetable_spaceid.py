# Generated by Django 4.1.4 on 2023-05-19 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0021_favoritetable'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='favoritetable',
            name='id',
        ),
        migrations.AlterField(
            model_name='favoritetable',
            name='spaceID',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]