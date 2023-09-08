import { ProjectInterface } from "@/common.types";
import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";
import { getProjectsDetails } from "@/lib/actions";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

const EditProject = async ({ params: { id } }: { params: { id: string } }) => {
	const session = await getCurrentUser();

	if (!session?.user) redirect("/");

	const result = (await getProjectsDetails(id)) as {
		project?: ProjectInterface;
	};
	return (
		<Modal>
			<h3 className="modal-head-text">Edit a New Project</h3>
			<ProjectForm type="edit" session={session} project={result?.project} />
		</Modal>
	);
};
export default EditProject;
