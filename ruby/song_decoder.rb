# This method decodes dubstep remix lyrics and restore them to their original form.
# i.e. song_decoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
#  =>  WE ARE THE CHAMPIONS MY FRIEND

def song_decoder(song)
  p song.gsub("WUB", " ").split * " "
end

song_decoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
song_decoder("WUBWUBIWUBAMWUBWUBX")
