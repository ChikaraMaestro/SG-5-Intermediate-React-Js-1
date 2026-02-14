export default function Button({
    children,
    onClick,
    variant = "primary",
    type ="button"
}){
    let className = "btn"

    if(variant === "primary") className+= " bg-[#4285f4] text-white";
    if(variant === "danger") className+= " bg-[#f24444] text-white";
    if(variant === "secondary") className+= " bg-[#e4e6eb] text-[#333333]";
    if(variant === "warning") className+= " bg-[#f3d600] text-white";
    if(variant === "success") className+= " bg-[#2ecc71] text-white";

    return  (
        <button type={type} onClick={onClick} className={className} >
            {children}
        </button>
    );
};
