'use client';

interface ContainerProps {
    // Defining shape of Props object that will be passed in
    children: React.ReactNode;
}

// React.FC is a type alias in React that is used to define function components with props in TypeScript
// React.FC allows to define the props type as a generic type argument
const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div 
        className="   
        max-w-[2520px]
        mx-auto
        xl:px-20
        md:px-10
        sm:px-2
        px-4
        "
        >
            {children}
        </div>
    );
};

export default Container;