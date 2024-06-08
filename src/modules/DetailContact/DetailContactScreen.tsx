import {
  createContact,
  deleteContact,
  editContact,
  getDetailContact,
} from '@/services/ContactServices';
import {editLastVisitContact} from '@/store/contact/ContactActions';
import {IContact} from '@/types/contact';
import {RoutesParamList, routesEnum} from '@/types/navigation';
import {getImg} from '@/utils/utils';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useState} from 'react';
import {useMutation, useQuery, useQueryClient} from 'react-query';
import {useDispatch} from 'react-redux';
import DetailContactView from './DetailContactView';

type Props = NativeStackScreenProps<RoutesParamList, routesEnum.DETAIL_CONTACT>;

function DetailContactScreen({route, navigation}: Props) {
  const {id} = route.params;
  const isEdit = Boolean(id && id !== '');
  const dispatch = useDispatch();

  const queryClient = useQueryClient();

  const {isFetching} = useQuery({
    enabled: isEdit,
    queryKey: ['contacts', id],
    queryFn: () => getDetailContact(id),
    onSuccess: (a: IContact) => {
      setFormData({
        firstName: a?.firstName,
        lastName: a?.lastName,
        age: a?.age,
        photo: getImg(a?.photo),
        id: a?.id,
      });
    },
  });

  const createContactMutation = useMutation({
    mutationFn: createContact,
    onSuccess: () => {
      queryClient.invalidateQueries(['contacts'], {exact: true});
      navigation.goBack();
    },
  });

  const editContactMutation = useMutation({
    mutationFn: editContact,
    onSuccess: ({data}) => {
      dispatch(editLastVisitContact(data));
      queryClient.invalidateQueries(['contacts'], {exact: true});
      navigation.goBack();
    },
  });

  const deleteContactMutation = useMutation({
    mutationFn: () => deleteContact(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['contacts'], {exact: true});
      navigation.goBack();
    },
  });

  const [formData, setFormData] = useState<IContact>({
    id: '',
    firstName: '',
    lastName: '',
    age: 0,
    photo: '',
  });
  const [visibleAlert, setVisibleAlert] = useState(false);

  const handleSubmit = useCallback(() => {
    if (isEdit) {
      editContactMutation.mutate(formData);
    } else {
      createContactMutation.mutate(formData);
    }
  }, [createContactMutation, editContactMutation, formData, isEdit]);

  const handleDelete = useCallback(() => {
    deleteContactMutation.mutate();
    setVisibleAlert(false);
  }, [deleteContactMutation]);

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleShowAlert = useCallback(() => {
    setVisibleAlert(true);
  }, []);

  const handlePressAvatar = useCallback(() => {
    const idImg = Math.floor(Math.random() * 9) + 1;
    setFormData(prev => ({
      ...prev,
      photo: `https://reqres.in/img/faces/${idImg}-image.jpg`,
    }));
  }, []);

  const handleInputChange = useCallback((value: string, fieldName: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value,
    }));
  }, []);

  const handleHideAlert = useCallback(() => {
    setVisibleAlert(false);
  }, []);

  return (
    <DetailContactView
      onBackPress={handleBackPress}
      onDeletePress={handleShowAlert}
      isFetchingDetail={isFetching}
      onPressAvatar={handlePressAvatar}
      formData={formData}
      onPressSubmit={handleSubmit}
      onInputChange={handleInputChange}
      onHideAlert={handleHideAlert}
      onAgreeDelete={handleDelete}
      isShowAlertDelete={visibleAlert}
      pageTitle={isEdit ? 'Edit Contact' : 'Create Contact'}
      btnTitle={isEdit ? 'Edit' : 'Create'}
      isBtnLoading={
        editContactMutation.isLoading || createContactMutation.isLoading
      }
    />
  );
}

export default DetailContactScreen;
