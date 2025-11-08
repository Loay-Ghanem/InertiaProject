import { useForm } from "@inertiajs/react";

export default function CustomForm({ action, className = "space-y-6", children, inputData = {} }) {

    const { data, setData, post, processing, errors } = useForm(inputData);

    function submitForm(e) {
        e.preventDefault();
        post(route(action));
    }

    return (
        <form className={className} onSubmit={submitForm}>
            {typeof children === "function"
                ? children({ data, setData, errors, processing })
                : children
            }
        </form>
    );
}
