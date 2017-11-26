from django.db import models


class Voc_gender(models.Model):
    vocabulary = models.CharField(max_length=50)
    gender = models.CharField(max_length=5)

    def __str__(self):
        return self.vocabulary
