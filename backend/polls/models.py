from django.db import models

# Create your models here.
class coWorkingSpace(models.Model):
    # spaceID : INTEGER型で、主キー
    spaceID = models.IntegerField(primary_key=True)
    # 場所 : 文字列100桁
    aria = models.CharField(max_length=100)
    # 名前 : 文字列50桁
    name = models.CharField(max_length=50)
    #カフェなのかどうか: BOOLEAN型 コワーキングスペース:False カフェ:True
    isCafe = models.BooleanField()
    # 住所 : 文字列100桁
    address = models.CharField(max_length=100)
    # 最寄駅 : 文字列50桁
    station = models.CharField(max_length=50)
    # wi-fi : INTEGER型 無:0 有:1 強:2
    wifi = models.IntegerField()
    # 電源 : BOOLEAN型 無:False 有:True
    isBattery = models.BooleanField()
    # 会議室 : INTEGER型 無:0 有:1 広々:2
    isMeetingRoom = models.IntegerField()
    # 価格/月 : INTEGER型
    price = models.IntegerField()
    # 開始時間 : datetime型
    startTime = models.TimeField()
    # 終了時間 : datetime型
    endTime = models.TimeField()
    # ドロップイン可能
    isDropIn = models.BooleanField()
    # 管轄 : 文字列50桁
    jurisdiction = models.CharField(max_length=50)
    # 充実オプション: BOOLEAN型 無:False 有:True
    isEnhancedOptions = models.BooleanField()
    # 画像の名前 : 文字列50桁
    imageName = models.CharField(max_length=50)
    # お気に入り数 : INTEGER型 
    favorite = models.IntegerField()
    
    # 最寄り駅から徒歩何分か: INTEGER型 
    timeFromStation = models.IntegerField()
    
    # 会議室の収容人数: INTEGER型 
    MeetingRoomCapacity = models.IntegerField()
    # オプションの内容: 文字列100桁 各オプションは","で区切る。,の前後にスペースは入れない。
    # Ex) プリンター,秘書,ドリンク
    options = models.CharField(max_length=50)
    
    
    url = models.CharField(max_length=200)
     
    
    
    

    
    def __str__(self):
      return self.name

class test(models.Model):
  test2 = models.CharField(max_length=50, primary_key=True)
  def __str__(self):
    return self.test2
  
class review(models.Model):
  memberID = models.CharField(max_length=100)
  title = models.CharField(max_length=100)
  review = models.CharField(max_length=100)
  spaceName = models.CharField(max_length=100)
  created = models.DateTimeField(auto_now_add=True)
  
  class Meta:
    ordering = ['created']
  def  getSpaceName(self):
    return self.spaceName
  def __str__(self):
    return self.title




 


