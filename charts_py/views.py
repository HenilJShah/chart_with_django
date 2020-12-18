from django.shortcuts import render
import altair as alt
from vega_datasets import data
ca = data.cars()

# Create your views here.
def home(request):
    return render(request, 'index.html')


def datapart(request):
    dataenter1 = request.POST.get('inputdata1')
    dataenter2 = request.POST.get('inputdata2')
    dataenter3 = request.POST.get('inputdata3')
    dataenter4 = request.POST.get('inputdata4')
    dataenter5 = request.POST.get('inputdata5')
    dataenter6 = request.POST.get('inputdata6')
    dataenter7 = request.POST.get('inputdata7')
    dataenter8 = request.POST.get('inputdata8')
    ls = [dataenter1, dataenter2, dataenter3, dataenter4,
          dataenter5, dataenter6, dataenter7, dataenter8, ]
    print('\n', ls, '\n')
    return render(request, 'index.html', {'ls': ls})


def altair_alt(request):
    a = {'data':alt.Chart(ca).mark_point().encode(x='Displacement',y='Horsepower',color='Name').interactive()}
    return render(request, 'altair_alt.html',a)
