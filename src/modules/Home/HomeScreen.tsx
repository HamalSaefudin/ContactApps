import {getAllContact} from '@/services/ContactServices';
import {setLastVisitContact} from '@/store/contact/ContactActions';
import {IContact} from '@/types/contact';
import {RoutesParamList, routesEnum} from '@/types/navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {useQuery} from 'react-query';
import {useDispatch} from 'react-redux';
import HomeView from './HomeView';

type Props = NativeStackScreenProps<RoutesParamList, routesEnum.HOME>;

function HomeScreen({navigation}: Props) {
  const dispatch = useDispatch();

  const {data, isFetching, refetch} = useQuery({
    queryKey: ['contacts'],
    queryFn: getAllContact,
    placeholderData: [
      {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        photo: 'https://randomuser.me/api/port',
        age: 20,
      },
    ],
  });
  const onPressListItem = (item: IContact) => {
    dispatch(setLastVisitContact(item));
    navigation.navigate(routesEnum.DETAIL_CONTACT, {id: item.id});
  };
  const onPressAddButton = () => {
    navigation.navigate(routesEnum.DETAIL_CONTACT, {id: ''});
  };

  return (
    <HomeView
      onRefresh={refetch}
      onPressListItem={onPressListItem}
      onPressAddButton={onPressAddButton}
      contactData={data as IContact[]}
      isFetchingContactData={isFetching}
    />
  );
}

export default HomeScreen;
