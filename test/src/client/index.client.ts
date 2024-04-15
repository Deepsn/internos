import {
	CreateButton,
	CreateText,
	ForceRefresh,
	Initialize,
} from "@rbxts/internos";
import { CreateEditable } from "../editable";

Initialize();
CreateText("Hello");
CreateText("Two lines");

CreateEditable("Editable number", 23);

game.GetService("RunService").RenderStepped.Connect(() => {
	const number = CreateEditable("Loop editable number", 35);
	const cframe = CreateEditable("Loop editable cframe", new CFrame(20, 25, 0));
	const reset = CreateButton("Click me");

	CreateText(`Loop text ${number}`);
	CreateText(`Loop cframe ${cframe}`);

	if (reset) ForceRefresh();
});
