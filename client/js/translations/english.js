var L = {};

/*------------------------------
	Main Menu
------------------------------*/

// Common
L["Title"] = "Settlers of Catan";		// Game Title
L["DefaultName"] = "Settler";			// Default player name

// Lobby
L["ServerList"] = "Server List";		// Server list header
L["ServerListName"] = "Name";			// Server list name column
L["ServerListSchema"] = "Schema";		// Server list schema column
L["ServerListPlayers"] = "Players";		// Server list player column
L["ServerListRefresh"] = "Refresh";		// Server list refresh button

L["PlayerNamePlaceholder"] = "Your name";	// Player name placeholder

L["ServerCreate"] = "Create Server";		// Server setup header
L["ServerNamePlaceholder"] = "Server Name";	// Server name placeholder
L["ServerConfig"] = "Configuration";		// Server configuration subtitle
L["ServerPublic"] = "Public";				// Public server
L["ServerConnect"] = "Connect";				// Connect button

// Schema Names
L["SchemaClassic"] = "Classic";			// Classic schema name


/*------------------------------
	In-Game
------------------------------*/

// Player connection
L["PlayerConnect"] = "{0} has joined the game.";	// Player joined
L["PlayerDisconnect"] = "{0} has disconnected.";	// Player disconnected

// Player turn
L["PlayerTurn"] = "It is now {0}'s turn.";		// Other player's turn
L["LocalPlayerTurn"] = "It is now your turn.";	// Local Player's turn

// Rolling dice
L["RolledDice"] = "Rolled: {0} + {1} = {2}";
L["MustRollDice"] = "You must roll the dice first.";	// Player must roll the dice
L["CantRollDice"] = "You've already rolled the dice.";	// Player unable to roll the dice

// Game notifications
L["SelectSettlement"] = "Select a settlement.";		// Setup state, select settlement
L["SelectRoad"] = "Select a road.";					// Setup state, select road
L["TenVPNotTurn"] = "You have achieved 10 victory points, but it must be your turn to win!"

// Game state changes
L["State2"] = "Setup mode has now begun.";	// Setup state message
L["State3"] = "Game is now in-progress.";	// Playing state message
L["State4"] = "Game has ended.";			// End state message

// Error Messages
L["ErrorNeedPlayers"] = "There must be 2 players in the game to start." // Minimum of 2 players required to start game
L["InsufficientResources"] = "Not enough resources."

// Trading
L["TradeNotTurn"] = "It must be your turn to initiate at trade.";

// Resources
L["Resource1"] = "Lumber";
L["Resource2"] = "Brick";
L["Resource3"] = "Wool";
L["Resource4"] = "Grain";
L["Resource5"] = "Ore";

CATAN.Localization.register("english", L);