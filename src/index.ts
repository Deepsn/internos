import Iris, { ForceRefresh } from "@rbxts/iris";
import { CreateButton } from "./creatables/button";
import { CreateText } from "./creatables/text";
import { CreateEditable } from "./editable";
import { createElements } from "./elements";

function Initialize() {
	Iris.Init();

	Iris.Connect(() => {
		Iris.Window(["Internos"]);

		createElements();

		Iris.End();
	});
}

function Destroy() {
	Iris.Shutdown();
}

export {
	CreateButton,
	CreateEditable,
	CreateText,
	Destroy,
	ForceRefresh,
	Initialize,
};
