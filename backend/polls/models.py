from django.db import models

# Create your models here.
class coWorkingSpace(models.Model):
    # spaceID : INTEGER型で、主キー
    spaceID = models.IntegerField(primary_key=True)
    # 場所 : 文字列100桁
    aria = models.CharField(max_length=100)
    # 名前 : 文字列50桁
    name = models.CharField(max_length=50)
    # 住所 : 文字列100桁
    address = models.CharField(max_length=100)
    # 最寄駅 : 文字列50桁
    station = models.CharField(max_length=50)
    # wi-fi : INTEGER型 無:0 有:1 強:2
    wifi = models.IntegerField()
    # 電源 : BOOLEAN型 無:False 有:True
    isBattery = models.BooleanField()
    # 会議室 : BOOLEAN型 無:False 有:True
    isMeetingRoom = models.BooleanField()
    # 価格/月 : INTEGER型
    price = models.IntegerField()
    # 開始時間 : datetime型
    startTime = models.DateTimeField()
    # 終了時間 : datetime型
    endTime = models.DateTimeField()
    # お気に入り数 : INTEGER型 
    favorite = models.IntegerField()
    # 管轄 : 文字列50桁
    jurisdiction = models.CharField(max_length=50)

    def __str__(self):
      return self.name

class test(models.Model):
  test2 = models.CharField(max_length=50, primary_key=True)
  def __str__(self):
    return self.test2




 

