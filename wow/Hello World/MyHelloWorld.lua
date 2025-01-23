local function OnEvent(self, event, ...)
    if event == "PLAYER_LOGIN" then
        print("Hello, World!")
    end
end

local frame = CreateFrame("Frame")
frame:RegisterEvent("PLAYER_LOGIN")
frame:SetScript("OnEvent", OnEvent)