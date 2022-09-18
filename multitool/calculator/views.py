from django.shortcuts import render


def calculatorView(request, *args, **kwargs):
    return render(request, "calculator.html", {})
