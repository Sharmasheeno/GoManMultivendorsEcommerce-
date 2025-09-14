import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "GoManShop - Store Dashboard",
    description: "GoManShop - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
