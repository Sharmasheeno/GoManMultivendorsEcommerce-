import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "GoManShop - Admin",
    description: "GoManShop - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
