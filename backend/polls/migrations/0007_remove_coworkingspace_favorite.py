# Generated by Django 4.1.5 on 2023-01-26 03:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("polls", "0006_coworkingspace_imagename"),
    ]

    operations = [
        migrations.RemoveField(model_name="coworkingspace", name="favorite",),
    ]