# Generated by Django 4.1.5 on 2023-01-14 06:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("polls", "0002_test"),
    ]

    operations = [
        migrations.RemoveField(model_name="test", name="test1",),
        migrations.AlterField(
            model_name="test",
            name="test2",
            field=models.CharField(max_length=50, primary_key=True, serialize=False),
        ),
    ]