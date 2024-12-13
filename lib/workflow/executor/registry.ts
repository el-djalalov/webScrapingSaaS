import { TaskType } from "@/types/task";
import { LaunchBrowserExecutor } from "./LaunchBrowserExecutor";
import { PageToHtmlExecutor } from "./PageToHtmlExecutor";
import { ExecutionEnvironment } from "@/types/executor";
import { WorkflowTask } from "@/types/workflow";
import { ExtractTextFromElementExecutor } from "./ExtractTextFromElementExecutor";
import { FillInputExecutor } from "./FillInputExecutor";
import { ClickElementExecutor } from "./ClickElementExecutor";
import { WaitForElementExecutor } from "./WaitForElementExecutor";
import { DeliverViaWebHookExecutor } from "./DeliverViaWebHookExecutor";
import { ExtractDataWithAiExecutor } from "./ExtractDataWithAiExecutor";
import { ReeadPropertyFromJsonExecutor } from "./ReeadPropertyFromJsonExecutor";
import { AddPropertyToJsonExecutor } from "./AddPropertyToJsonExecutor";
import { NavigateUrlExecutor } from "./NavigateUrlExecutor";

type ExecutorFn<T extends WorkflowTask> = (
	environment: ExecutionEnvironment<T>
) => Promise<boolean>;

type RegistryType = {
	[K in TaskType]: ExecutorFn<WorkflowTask & { type: K }>;
};

export const ExecutorRegistry: RegistryType = {
	LAUNCH_BROWSER: LaunchBrowserExecutor,
	PAGE_TO_HTML: PageToHtmlExecutor,
	EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElementExecutor,
	FILL_INPUT: FillInputExecutor,
	CLICK_ELEMENT: ClickElementExecutor,
	WAIT_FOR_ELEMENT: WaitForElementExecutor,
	DELIVER_VIA_WEBHOOK: DeliverViaWebHookExecutor,
	EXTRACT_DATA_WITH_AI: ExtractDataWithAiExecutor,
	READ_PROPERTY_FROM_JSON: ReeadPropertyFromJsonExecutor,
	ADD_PROPERTY_TO_JSON: AddPropertyToJsonExecutor,
	NAVIGATE_URL: NavigateUrlExecutor,
};
