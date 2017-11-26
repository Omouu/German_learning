from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Voc_gender
import random


def index(request):
    random_id = random.randint(1, 328)
    voc = get_object_or_404(Voc_gender, pk=random_id)

    if request.is_ajax():
        return JsonResponse({'word': voc.vocabulary,
                             'gender': voc.gender})
    else:
        return render(request, 'gender/index.html', {'voc': voc})
