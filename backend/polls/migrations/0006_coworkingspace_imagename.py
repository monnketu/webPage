# Generated by Django 4.1.5 on 2023-01-26 03:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("polls", "0005_coworkingspace_iscafe_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="coworkingspace",
            name="imageName",
            field=models.CharField(default="sample.png", max_length=50),
            preserve_default=False,
        ),
    ]