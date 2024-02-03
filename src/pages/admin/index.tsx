import { useState } from 'react';
import AdminView from './AdminView'

function Admin() {
    const [formMode, setFormMode] = useState("create");

    return (
        <AdminView mode={formMode} setMode={setFormMode} />
    )
}

export default Admin