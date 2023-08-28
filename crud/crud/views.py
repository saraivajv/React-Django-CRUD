from crud.serialize import serializers
from crud.models import DetailsModel
from crud.serialize import DetailsSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

# class DetailsTable(APIView):
#     def get(self,request):
#         detailsObj = DetailsModel.objects.all()
#         dlSerializeOnj = DetailsSerializer(detailsObj,many=True)
#         return Response(dlSerializeOnj.data)
    
#     def post(self, request):
#         serializeobj = DetailsSerializer(data=request.data)
#         if serializeobj.is_valid():
#             serializeobj.save()
#             return Response(200)
#         return Response(serializeobj.errors)
    
# class DetailsUpdate(APIView):
#     def post(self, request, pk):

#         try:
#             detailObj = DetailsModel.objects.get(pk=pk)
#         except:
#             return Response("Not found in Database")
        
#         serializeobj = DetailsSerializer(detailObj, data=request.data)
#         if serializeobj.is_valid():
#             serializeobj.save()
#             return Response(200)
#         return Response(serializeobj.errors)

# class DetailsDelete(APIView):
#     def post(self, request, pk):

#         try:
#             detailObj = DetailsModel.objects.get(pk=pk)
#         except:
#             return Response("Not found in Database")
#         detailObj.delete()
#         return Response(200)

class EmployeeList(generics.ListCreateAPIView):
    queryset=DetailsModel.objects.all()
    serializer_class=DetailsSerializer

class EmployeeDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset=DetailsModel.objects.all()
    serializer_class=DetailsSerializer