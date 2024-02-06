import { useEffect, useState } from 'react';
import AdminView from './AdminView'
import FortuneItemForm, { Mode } from 'widgets/fortuneItemForm';
import { deleteSingle, getList, updateSingle } from 'shared/api/IndexedDB/FortuneItems/crud';
import FortuneItemsList from 'widgets/FortuneItemsList';

function Admin() {
    const [formMode, setFormMode] = useState<Mode>("create");
    const [fortuneItems, setFortuneItems] = useState<any>([]);
    const [data, setData] = useState<any>(null);

    async function fetchList() {
        const list = await getList()
        setFortuneItems(list)
    }

    async function handleSubmit(data: any) {
        await updateSingle(data)
        await fetchList()
        setFormMode('create')
    }
    async function handleDelete(id: any) {
        deleteSingle(id)
        await fetchList()
    }

    function fillItemsForm(data: any) {
        setFormMode('update')
        setData(data);
    }

    useEffect(() => {
        fetchList()
    }, []);


    return (
        <AdminView
            form={<FortuneItemForm
                mode={formMode}
                data={data}
                submitHandler={handleSubmit}
                setData={setData}
            />}
            list={<FortuneItemsList
                list={fortuneItems}
                fill={fillItemsForm}
                deleteSingle={handleDelete}
            />}
        />
    )
}

export default Admin