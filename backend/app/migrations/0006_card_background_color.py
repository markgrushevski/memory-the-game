# Generated by Django 4.2.3 on 2023-11-12 07:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_game_delete_field'),
    ]

    operations = [
        migrations.AddField(
            model_name='card',
            name='background_color',
            field=models.CharField(default='#000', max_length=100),
            preserve_default=False,
        ),
    ]
