import { AppNode } from "@/types/appNode";
import { TaskType } from "@/types/task";

export function CreateFlowNode(
	nodeType: TaskType,
	position?: { x: number; y: number }
): AppNode {
	return {
		id: crypto.randomUUID(),
		type: "WebScrapeNode",
		dragHandle: ".drag-handle",
		data: {
			type: nodeType,
			inputs: {},
		},
		position: position ?? { x: 0, y: 0 },
	};
}
