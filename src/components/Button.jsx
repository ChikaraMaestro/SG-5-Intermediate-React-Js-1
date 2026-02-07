import '../assets/css/todolist.css'

export default function Button({
    children,
    onClick,
    variant = "primary",
    type ="button"
}){
    let className = "btn"

    if(variant === "primary") className+= " btn-primary";
    if(variant === "danger") className+= " btn-error";
    if(variant === "secondary") className+= " btn-secondary";
    if(variant === "warning") className+= " warning";
    if(variant === "succes") className+= " btn-succes";

    return  (
        <button type={type} onClick={onClick} className={className} >
            {children}
        </button>
    );
};
