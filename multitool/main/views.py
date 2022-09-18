from django.shortcuts import render


def mainView(request, *args, **kwargs):
    return render(request, "main.html", {})
