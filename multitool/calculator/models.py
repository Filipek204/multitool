from django.db import models


class Button(models.Model):
    number = models.IntegerField(blank=True, null=True)
    signs = models.CharField(max_length=15, blank=True, null=True)
    equals_sign = models.BooleanField(default=False)
