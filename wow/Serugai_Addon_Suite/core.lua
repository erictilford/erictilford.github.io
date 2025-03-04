-- NOTES
-- reference Guidelime sage for addon title formatting
-- |TInterface/Addons/Serugai_Addon_Suite/Images/Glorp:12|t
-- level up sfx
-- death sfx
-- 100 / 69 / 1 roll sfx

-- FUNCTIONS
function RainbowText(text)
    local colors = {
        "|cffff0000", -- Red
        "|cffff8000", -- Orange
        "|cffffff00", -- Yellow
        "|cff00ff00", -- Green
        "|cff4747ff", -- Blue
        "|cff8000ff"  -- Purple
    }
    
    local colorIndex = 1
    local result = ""
    
    for i = 1, #text do
        local char = text:sub(i, i)
        result = result .. colors[colorIndex] .. char .. "|r" 
        
        if char ~= " " then
            colorIndex = (colorIndex % #colors) + 1
        end
    end
    
    return result
end


-- PARAMETERS
local clr = "46d0c6"
local hspeed = "|cff" .. clr .. "/speed|r: Prints target or player's current speed."
local hnaked = "|cff" .. clr .. "/naked|r: Shows target or player without clothes."
local hpoker = "|cff" .. clr .. "/poker|r: Prints a random poker hand."
local hrainbow = "|cff" .. clr .. "/rainbow|r <|cff" .. clr .. "text|r>: Prints text in " .. RainbowText("RAINBOW COLORS") .. "!"


-- LOADING MSG
local function OnEvent(self, event, ...)
    if event == "PLAYER_LOGIN" then
        print("|cff" .. clr .. "Serugai Addon Suite (SAS)|r loaded! |cff" .. clr .. "/sas|r")
    end
end

local frame = CreateFrame("Frame")
frame:RegisterEvent("PLAYER_LOGIN")
frame:SetScript("OnEvent", OnEvent)


-- MAIN SLASH COMMAND
SLASH_SAS1 = "/sas"
SLASH_SAS2 = "/serugai"

local function SASCommandHandler(msg, editBox)
    print("Welcome to |cff" .. clr .. "Serugai Addon Suite|r!")
    -- print("  Available functions:")
    print("  " .. hspeed)
    print("  " .. hnaked)
    print("  " .. hpoker)
    print("  " .. hrainbow)
end

SlashCmdList["SAS"] = SASCommandHandler


-- PRINT MOVEMENT SPEED
SLASH_SPEED1 = "/speed"
SLASH_SPEED2 = "/spd"

local function SpeedCommandHandler(msg, editBox)
    if msg == "" then
        local targetName = UnitName("target")
        local playerName = UnitName("player")

        if targetName and targetName ~= playerName then
            print(string.format(UnitName("target") .. "'s current speed: %d%%", GetUnitSpeed("target") / 7 * 100))
        else
            print(string.format("My current speed: %d%%", GetUnitSpeed("player") / 7 * 100))
        end
    elseif msg == "help" or msg == "?" then
        print(hspeed)
        print("  alias(es): |cff" .. clr .. "/spd|r")
    end

end
SlashCmdList["SPEED"] = SpeedCommandHandler


-- SHOW PLAYER WITHOUT CLOTHES
SLASH_NAKED1 = "/naked"
SLASH_NAKED2 = "/nakey"
SLASH_NAKED3 = "/nude"

local function NakedCommandHandler(msg, editBox)
    if msg == "" then
        if not DressUpFrame:IsShown() then 
            ShowUIPanel(DressUpFrame) 
        end 
        if UnitIsPlayer("target") then 
            DressUpModelFrame:SetUnit("target") 
        else DressUpModelFrame:SetUnit("player") 
        end 
        DressUpModelFrame:Undress()
    elseif msg == "help" or msg == "?" then
        print(hnaked)
        print("  alias(es): |cff" .. clr .. "/nakey|r, |cff" .. clr .. "/nude|r")
    end
    
end

SlashCmdList["NAKED"] = NakedCommandHandler


-- SHOW POKER HAND
SLASH_POKER1 = "/poker"
SLASH_POKER2 = "/pkr"

local function PokerCommandHandler(msg, editBox)
    if msg == "" then
        u={"|cfff11b52♥|r","|cfff15a27♦|r","|cff0d9389♣|r","|cff5b6ed9♠|r"} 
        b={"A","2","3","4","5","6","7","8","9","10","J","Q","K"} 
        s="" 
        a = {} 
        for i=1, 52 do 
            a[i]=i 
        end 
        for i=1, 5 do 
            x=math.random(table.getn(a)) 
            y=a[x] table.remove(a,x); 
            s=s..b[((y-1)%13)+1]..u[math.ceil(y/13)].." "
        end 
        print(s)
    elseif msg == "help" or msg == "?" then
        print(hpoker)
        print("  alias(es): |cff" .. clr .. "/pkr|r")
    end
end

SlashCmdList["POKER"] = PokerCommandHandler


-- RAINBOW TEXT
SLASH_RAINBOW1 = "/rainbow"
SLASH_RAINBOW2 = "/rb"

local function RainbowCommandHandler(msg, editBox)
    if msg == "" or msg == "help" or msg == "?" then
        print(hrainbow)
        print("  alias(es): |cff" .. clr .. "/rb|r")
    else
        print(RainbowText(msg))
    end
    
end

SlashCmdList["RAINBOW"] = RainbowCommandHandler


-- ROLLS
local rollFrame = CreateFrame("Frame")
rollFrame:RegisterEvent("CHAT_MSG_SYSTEM")

rollFrame:SetScript("OnEvent", function(self, event, message)
    local player, roll, min, max = message:match("(%S+) rolls (%d+) %((%d+)-(%d+)%)")
    if player and tonumber(roll) == 100 then
        print(player .. " rolled a perfect 100!")
    end
end)


-- REPLACE DEATH SOUND
local levelUpFrame = CreateFrame("Frame")
levelUpFrame:RegisterEvent("PLAYER_LEVEL_UP")

levelUpFrame:SetScript("OnEvent", function(self, event, ...)
    if event == "PLAYER_LEVEL_UP" then
        local soundPath = "Interface\\AddOns\\Serugai_Addon_Suite\\audio\\ff7.mp3"
        
        if C_File and C_File.Exists and not C_File.Exists(soundPath) then -- delete this check later
            print("[Serugai_Addon_Suite] Error: Level-up sound file not found at " .. soundPath)
            return
        end
        
        PlaySoundFile(soundPath, "Master")
        
        -- Stop the default level-up sound // this isn't working currently
        MuteSoundFile(888) -- 888 is the ID for the default level-up sound
    end
end)


-- ADDON OPTIONS
local function CreateMyAddonOptions()
    local panel = CreateFrame("Frame")
    panel.name = "MyAddon"  -- Name in the Interface Options

    -- Create the checkbox
    local checkbox = CreateFrame("CheckButton", "MyAddonCheckbox", panel, "ChatConfigCheckButtonTemplate")
    checkbox:SetPoint("TOPLEFT", 16, -16)
    checkbox.Text:SetText("Enable Feature")  -- Checkbox label

    -- Function to save checkbox state
    checkbox:SetScript("OnClick", function(self)
        MyAddonDB.enableFeature = self:GetChecked()
    end)

    -- Load the saved state when the panel is opened
    panel:SetScript("OnShow", function()
        checkbox:SetChecked(MyAddonDB.enableFeature)
    end)

    -- Add to Interface Options
    InterfaceOptions_AddCategory(panel)
    print("SUCCESS")
end

-- Call the function when the addon is loaded
CreateMyAddonOptions()


