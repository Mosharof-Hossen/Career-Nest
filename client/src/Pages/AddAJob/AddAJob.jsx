import useAuthContext from "../../Hooks/useAuthContext";

const AddAJob = () => {
    const { user } = useAuthContext();
    console.log(user);
    return (
        <div>
            AddAJob
        </div>
    );
};

export default AddAJob;