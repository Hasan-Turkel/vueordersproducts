
import { reactive, ref } from "vue";
import useAxios from "./useAxios"
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify';
const useOrderCalls = () => {

  const router = useRouter()
    const data = ref<any[]>([])
    let detailData = reactive({orderDate: "",
    description: "",
    paymentType: "",
    orderDetails: [],
    customerName: "",
    id: ""})
    
    const { axiosSimple } = useAxios()


  const delOrder = async (id:string) => {
   
    try {
        const { data } = await axiosSimple.delete(`orders/${id}/`,
    );
    toast.success("The order has been deleted.")
    setTimeout(() => {
      router.go(-1)
    }, 2000);
     
    } catch (error) {
    toast.error("The order couldn't be deleted.")
    }
  };

  const updateOrder = async (values:any, id:any) => {
   
    try {
        const { data } = await axiosSimple.put(`/orders/${id}`,values,
        );
        toast.success("The order has been updated.")
      
    } catch (error) {
      toast.error("The order couldn't be updated.")
    
    }
  };


  const sendOrder = async (values:any) => {

    try {
      const { data } = await axiosSimple.post(`/orders`, values, 
      );
      toast.success("The order has been created.")
      console.log(values);
      

      // console.log(data);
    } catch (error) {
      toast.error("The order couldn't be created.")
    }
  };

  const getOrders = async () => {

    try {
      const { data:orders } = await axiosSimple(`orders`
      );
     data.value=orders
      // console.log(data);
    } catch (error:any) {
      // console.log(error);
     
    }
  };


  const getOrder = async (id:string | string[]) => {
    try {
      const { data:order } = await axiosSimple(`orders/${id}`, 
      );
Object.assign(detailData, order)
    } catch (error) {
      // console.log(error);
    }
  };




  return {getOrders, data, detailData, getOrder, delOrder, sendOrder, updateOrder};
};

export default useOrderCalls;


