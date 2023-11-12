# Generated by Django 4.2.3 on 2023-11-11 17:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_player_delete_item'),
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('difficulty', models.CharField(max_length=255)),
                ('history', models.JSONField()),
                ('players', models.JSONField()),
            ],
        ),
        migrations.DeleteModel(
            name='Field',
        ),
    ]