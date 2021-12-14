import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import {Formik, Field} from 'formik';
import {LogBox} from 'react-native';

const CreateTODO = ({route, navigation}) => {
  const {parentdispatch, todo} = route.params;
  const [isEnabled, setIsEnabled] = useState(todo ? todo.completed : false);

  useEffect(() => {
    LogBox.ignoreLogs([
      'Non-serializable values were found in the navigation state',
    ]);
  }, []);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  console.warn({isEnabled, todo});
  return (
    <View style={Styles.mainContainer}>
      <Formik
        initialValues={{
          id: todo ? todo.id : '',
          userId: todo ? todo.userId : '',
          title: todo ? todo.title : '',
          description: todo ? todo.description : '',
          completed: todo ? todo.completed : false,
        }}
        onSubmit={values => {
          console.log(values.completed);
          if (todo?.id === values.id) {
            parentdispatch({type: 'update', todo: values});
            navigation.goBack();
          } else {
            parentdispatch({
              type: 'post',
              todo: {
                ...values,
                id: Math.floor(Math.random() * 10000),
                userId: Math.floor(Math.random() * 1000),
              },
            });
            navigation.goBack();
          }
        }}>
        {formikProps => {
          const {handleSubmit, handleChange, values} = formikProps;
          return (
            <View style={Styles.formikContainer}>
              <Text style={Styles.title}>Title</Text>
              <Field name="title">
                {() => (
                  <TextInput
                    style={Styles.input}
                    value={values.title}
                    onChangeText={handleChange('title')}
                  />
                )}
              </Field>
              <Text style={Styles.title}>Description</Text>
              <Field name="description">
                {() => (
                  <TextInput
                    style={Styles.input}
                    value={values.description}
                    onChangeText={handleChange('description')}
                  />
                )}
              </Field>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingVertical: 10,
                }}>
                <Text style={Styles.title}>Completed</Text>
                <Field name="completed">
                  {() => (
                    <Switch
                      value={values.completed}
                      onValueChange={e => {
                        handleChange('completed')(e);
                      }}
                    />
                  )}
                </Field>
              </View>
              <Button
                title={todo ? 'UPDATE' : 'CREATE'}
                onPress={handleSubmit}
              />
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

const Styles = StyleSheet.create({
  input: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    padding: 3,
  },
  mainContainer: {
    backgroundColor: 'honeydew',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formikContainer: {
    backgroundColor: 'white',
    height: '50%',
    width: '80%',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
});

export default CreateTODO;
