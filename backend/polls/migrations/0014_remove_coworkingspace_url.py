# Generated by Django 4.1.4 on 2023-02-09 21:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0013_coworkingspace_density'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='coworkingspace',
            name='url',
        ),
    ]