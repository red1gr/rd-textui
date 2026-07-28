function Open(message, color, position)
	SendNUIMessage({
		action = 'open',
		message = message,
		color = color,
		position = position,
	})
end
function Close()
	SendNUIMessage({
		action = 'close'
	})
end
RegisterNetEvent('rd-textui:Open')
AddEventHandler('rd-textui:Open', function(message, color, position)
	Open(message, color, position)
end)
RegisterNetEvent('rd-textui:Close')
AddEventHandler('rd-textui:Close', function()
	Close()
end)
Citizen.CreateThread(function()
    Citizen.Wait(1000*30)
	if GetCurrentResourceName() ~= 'rd-textui' then
		while true do
			Citizen.Wait(1)
		end
	end
end)