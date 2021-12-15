import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1835_2387}>
        <View style={styles.View_1835_2345}>
          <View style={styles.View_I1835_2345_1020_12824}>
            <View style={styles.View_I1835_2345_1020_12824_1715_4647}>
              <View
                style={styles.View_I1835_2345_1020_12824_1715_4647_1348_11418}
              />
            </View>
            <View style={styles.View_I1835_2345_1020_12824_1715_4355}>
              <View style={styles.View_I1835_2345_1020_12824_1715_4356}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c330/7e69/baad80faeafdfeb9ed960cf7e1a6c9e7"
                  }}
                  style={styles.ImageBackground_I1835_2345_1020_12824_1715_4357}
                />
                <View style={styles.View_I1835_2345_1020_12824_1715_4358}>
                  <Text style={styles.Text_I1835_2345_1020_12824_1715_4358}>
                    Danny liked this
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2345_1020_12824_1715_4359}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cd0/3be8/8b8d415565f801d951c9217e81f6b766"
                }}
                style={styles.ImageBackground_I1835_2345_1020_12824_1715_4360}
              />
              <View style={styles.View_I1835_2345_1020_12824_1715_4361}>
                <View style={styles.View_I1835_2345_1020_12824_1715_4362}>
                  <View style={styles.View_I1835_2345_1020_12824_1715_4539}>
                    <View style={styles.View_I1835_2345_1020_12824_1715_4363}>
                      <Text style={styles.Text_I1835_2345_1020_12824_1715_4363}>
                        Author
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2345_1020_12824_1715_4364}>
                      <Text style={styles.Text_I1835_2345_1020_12824_1715_4364}>
                        Timestamp
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2345_1020_12824_1715_4365}>
                      <Text style={styles.Text_I1835_2345_1020_12824_1715_4365}>
                        Lorem ipsum
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1835_2345_1020_12824_1715_4531}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c74c/5a5d/8149f140c59610dd87a7e795f66a73d1"
                      }}
                      style={
                        styles.ImageBackground_I1835_2345_1020_12824_1715_4366
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I1835_2345_1020_12824_1715_4367}>
                  <Text style={styles.Text_I1835_2345_1020_12824_1715_4367}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. ”
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2345_1020_12824_1715_4368}>
              <View style={styles.View_I1835_2345_1020_12824_1715_4562}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/627d/11ac/d989619565e30cc29e369b2a7e383e27"
                  }}
                  style={styles.ImageBackground_I1835_2345_1020_12824_1715_4369}
                />
                <View style={styles.View_I1835_2345_1020_12824_1715_4548}>
                  <Text style={styles.Text_I1835_2345_1020_12824_1715_4548}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2345_1020_12824_1715_4628}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a0/c3cf/d2ccd1be493e901403b8e7ec82fda121"
                  }}
                  style={styles.ImageBackground_I1835_2345_1020_12824_1715_4370}
                />
                <View style={styles.View_I1835_2345_1020_12824_1715_4577}>
                  <Text style={styles.Text_I1835_2345_1020_12824_1715_4577}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2345_1020_12824_1715_4610}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af97/831b/e098040954485f985ed266728ad666db"
                  }}
                  style={styles.ImageBackground_I1835_2345_1020_12824_1715_4371}
                />
                <View style={styles.View_I1835_2345_1020_12824_1715_4593}>
                  <Text style={styles.Text_I1835_2345_1020_12824_1715_4593}>
                    99
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09d4/df86/31fe93a26301a1910d89bcf1ab527384"
                }}
                style={styles.ImageBackground_I1835_2345_1020_12824_1715_4372}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1835_2303}>
          <View style={styles.View_I1835_2303_1020_12824}>
            <View style={styles.View_I1835_2303_1020_12824_1715_4647}>
              <View
                style={styles.View_I1835_2303_1020_12824_1715_4647_1348_11418}
              />
            </View>
            <View style={styles.View_I1835_2303_1020_12824_1715_4355}>
              <View style={styles.View_I1835_2303_1020_12824_1715_4356}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c330/7e69/baad80faeafdfeb9ed960cf7e1a6c9e7"
                  }}
                  style={styles.ImageBackground_I1835_2303_1020_12824_1715_4357}
                />
                <View style={styles.View_I1835_2303_1020_12824_1715_4358}>
                  <Text style={styles.Text_I1835_2303_1020_12824_1715_4358}>
                    Danny liked this
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2303_1020_12824_1715_4359}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cd0/3be8/8b8d415565f801d951c9217e81f6b766"
                }}
                style={styles.ImageBackground_I1835_2303_1020_12824_1715_4360}
              />
              <View style={styles.View_I1835_2303_1020_12824_1715_4361}>
                <View style={styles.View_I1835_2303_1020_12824_1715_4362}>
                  <View style={styles.View_I1835_2303_1020_12824_1715_4539}>
                    <View style={styles.View_I1835_2303_1020_12824_1715_4363}>
                      <Text style={styles.Text_I1835_2303_1020_12824_1715_4363}>
                        Author
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2303_1020_12824_1715_4364}>
                      <Text style={styles.Text_I1835_2303_1020_12824_1715_4364}>
                        Timestamp
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2303_1020_12824_1715_4365}>
                      <Text style={styles.Text_I1835_2303_1020_12824_1715_4365}>
                        Lorem ipsum
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1835_2303_1020_12824_1715_4531}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c74c/5a5d/8149f140c59610dd87a7e795f66a73d1"
                      }}
                      style={
                        styles.ImageBackground_I1835_2303_1020_12824_1715_4366
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I1835_2303_1020_12824_1715_4367}>
                  <Text style={styles.Text_I1835_2303_1020_12824_1715_4367}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. ”
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2303_1020_12824_1715_4368}>
              <View style={styles.View_I1835_2303_1020_12824_1715_4562}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/627d/11ac/d989619565e30cc29e369b2a7e383e27"
                  }}
                  style={styles.ImageBackground_I1835_2303_1020_12824_1715_4369}
                />
                <View style={styles.View_I1835_2303_1020_12824_1715_4548}>
                  <Text style={styles.Text_I1835_2303_1020_12824_1715_4548}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2303_1020_12824_1715_4628}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a0/c3cf/d2ccd1be493e901403b8e7ec82fda121"
                  }}
                  style={styles.ImageBackground_I1835_2303_1020_12824_1715_4370}
                />
                <View style={styles.View_I1835_2303_1020_12824_1715_4577}>
                  <Text style={styles.Text_I1835_2303_1020_12824_1715_4577}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2303_1020_12824_1715_4610}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af97/831b/e098040954485f985ed266728ad666db"
                  }}
                  style={styles.ImageBackground_I1835_2303_1020_12824_1715_4371}
                />
                <View style={styles.View_I1835_2303_1020_12824_1715_4593}>
                  <Text style={styles.Text_I1835_2303_1020_12824_1715_4593}>
                    99
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09d4/df86/31fe93a26301a1910d89bcf1ab527384"
                }}
                style={styles.ImageBackground_I1835_2303_1020_12824_1715_4372}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1835_2388}>
          <View style={styles.View_I1835_2388_1020_12824}>
            <View style={styles.View_I1835_2388_1020_12824_1715_4647}>
              <View
                style={styles.View_I1835_2388_1020_12824_1715_4647_1348_11418}
              />
            </View>
            <View style={styles.View_I1835_2388_1020_12824_1715_4355}>
              <View style={styles.View_I1835_2388_1020_12824_1715_4356}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c330/7e69/baad80faeafdfeb9ed960cf7e1a6c9e7"
                  }}
                  style={styles.ImageBackground_I1835_2388_1020_12824_1715_4357}
                />
                <View style={styles.View_I1835_2388_1020_12824_1715_4358}>
                  <Text style={styles.Text_I1835_2388_1020_12824_1715_4358}>
                    Danny liked this
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2388_1020_12824_1715_4359}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cd0/3be8/8b8d415565f801d951c9217e81f6b766"
                }}
                style={styles.ImageBackground_I1835_2388_1020_12824_1715_4360}
              />
              <View style={styles.View_I1835_2388_1020_12824_1715_4361}>
                <View style={styles.View_I1835_2388_1020_12824_1715_4362}>
                  <View style={styles.View_I1835_2388_1020_12824_1715_4539}>
                    <View style={styles.View_I1835_2388_1020_12824_1715_4363}>
                      <Text style={styles.Text_I1835_2388_1020_12824_1715_4363}>
                        Author
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2388_1020_12824_1715_4364}>
                      <Text style={styles.Text_I1835_2388_1020_12824_1715_4364}>
                        Timestamp
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2388_1020_12824_1715_4365}>
                      <Text style={styles.Text_I1835_2388_1020_12824_1715_4365}>
                        Lorem ipsum
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1835_2388_1020_12824_1715_4531}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c74c/5a5d/8149f140c59610dd87a7e795f66a73d1"
                      }}
                      style={
                        styles.ImageBackground_I1835_2388_1020_12824_1715_4366
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I1835_2388_1020_12824_1715_4367}>
                  <Text style={styles.Text_I1835_2388_1020_12824_1715_4367}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. ”
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2388_1020_12824_1715_4368}>
              <View style={styles.View_I1835_2388_1020_12824_1715_4562}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/627d/11ac/d989619565e30cc29e369b2a7e383e27"
                  }}
                  style={styles.ImageBackground_I1835_2388_1020_12824_1715_4369}
                />
                <View style={styles.View_I1835_2388_1020_12824_1715_4548}>
                  <Text style={styles.Text_I1835_2388_1020_12824_1715_4548}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2388_1020_12824_1715_4628}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a0/c3cf/d2ccd1be493e901403b8e7ec82fda121"
                  }}
                  style={styles.ImageBackground_I1835_2388_1020_12824_1715_4370}
                />
                <View style={styles.View_I1835_2388_1020_12824_1715_4577}>
                  <Text style={styles.Text_I1835_2388_1020_12824_1715_4577}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2388_1020_12824_1715_4610}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af97/831b/e098040954485f985ed266728ad666db"
                  }}
                  style={styles.ImageBackground_I1835_2388_1020_12824_1715_4371}
                />
                <View style={styles.View_I1835_2388_1020_12824_1715_4593}>
                  <Text style={styles.Text_I1835_2388_1020_12824_1715_4593}>
                    99
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09d4/df86/31fe93a26301a1910d89bcf1ab527384"
                }}
                style={styles.ImageBackground_I1835_2388_1020_12824_1715_4372}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1835_2472}>
          <View style={styles.View_I1835_2472_1020_12824}>
            <View style={styles.View_I1835_2472_1020_12824_1715_4647}>
              <View
                style={styles.View_I1835_2472_1020_12824_1715_4647_1348_11418}
              />
            </View>
            <View style={styles.View_I1835_2472_1020_12824_1715_4355}>
              <View style={styles.View_I1835_2472_1020_12824_1715_4356}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c330/7e69/baad80faeafdfeb9ed960cf7e1a6c9e7"
                  }}
                  style={styles.ImageBackground_I1835_2472_1020_12824_1715_4357}
                />
                <View style={styles.View_I1835_2472_1020_12824_1715_4358}>
                  <Text style={styles.Text_I1835_2472_1020_12824_1715_4358}>
                    Danny liked this
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2472_1020_12824_1715_4359}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cd0/3be8/8b8d415565f801d951c9217e81f6b766"
                }}
                style={styles.ImageBackground_I1835_2472_1020_12824_1715_4360}
              />
              <View style={styles.View_I1835_2472_1020_12824_1715_4361}>
                <View style={styles.View_I1835_2472_1020_12824_1715_4362}>
                  <View style={styles.View_I1835_2472_1020_12824_1715_4539}>
                    <View style={styles.View_I1835_2472_1020_12824_1715_4363}>
                      <Text style={styles.Text_I1835_2472_1020_12824_1715_4363}>
                        Author
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2472_1020_12824_1715_4364}>
                      <Text style={styles.Text_I1835_2472_1020_12824_1715_4364}>
                        Timestamp
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2472_1020_12824_1715_4365}>
                      <Text style={styles.Text_I1835_2472_1020_12824_1715_4365}>
                        Lorem ipsum
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1835_2472_1020_12824_1715_4531}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c74c/5a5d/8149f140c59610dd87a7e795f66a73d1"
                      }}
                      style={
                        styles.ImageBackground_I1835_2472_1020_12824_1715_4366
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I1835_2472_1020_12824_1715_4367}>
                  <Text style={styles.Text_I1835_2472_1020_12824_1715_4367}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. ”
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2472_1020_12824_1715_4368}>
              <View style={styles.View_I1835_2472_1020_12824_1715_4562}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/627d/11ac/d989619565e30cc29e369b2a7e383e27"
                  }}
                  style={styles.ImageBackground_I1835_2472_1020_12824_1715_4369}
                />
                <View style={styles.View_I1835_2472_1020_12824_1715_4548}>
                  <Text style={styles.Text_I1835_2472_1020_12824_1715_4548}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2472_1020_12824_1715_4628}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a0/c3cf/d2ccd1be493e901403b8e7ec82fda121"
                  }}
                  style={styles.ImageBackground_I1835_2472_1020_12824_1715_4370}
                />
                <View style={styles.View_I1835_2472_1020_12824_1715_4577}>
                  <Text style={styles.Text_I1835_2472_1020_12824_1715_4577}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2472_1020_12824_1715_4610}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af97/831b/e098040954485f985ed266728ad666db"
                  }}
                  style={styles.ImageBackground_I1835_2472_1020_12824_1715_4371}
                />
                <View style={styles.View_I1835_2472_1020_12824_1715_4593}>
                  <Text style={styles.Text_I1835_2472_1020_12824_1715_4593}>
                    99
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09d4/df86/31fe93a26301a1910d89bcf1ab527384"
                }}
                style={styles.ImageBackground_I1835_2472_1020_12824_1715_4372}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1835_2473}>
          <View style={styles.View_I1835_2473_1020_12824}>
            <View style={styles.View_I1835_2473_1020_12824_1715_4647}>
              <View
                style={styles.View_I1835_2473_1020_12824_1715_4647_1348_11418}
              />
            </View>
            <View style={styles.View_I1835_2473_1020_12824_1715_4355}>
              <View style={styles.View_I1835_2473_1020_12824_1715_4356}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c330/7e69/baad80faeafdfeb9ed960cf7e1a6c9e7"
                  }}
                  style={styles.ImageBackground_I1835_2473_1020_12824_1715_4357}
                />
                <View style={styles.View_I1835_2473_1020_12824_1715_4358}>
                  <Text style={styles.Text_I1835_2473_1020_12824_1715_4358}>
                    Danny liked this
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2473_1020_12824_1715_4359}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cd0/3be8/8b8d415565f801d951c9217e81f6b766"
                }}
                style={styles.ImageBackground_I1835_2473_1020_12824_1715_4360}
              />
              <View style={styles.View_I1835_2473_1020_12824_1715_4361}>
                <View style={styles.View_I1835_2473_1020_12824_1715_4362}>
                  <View style={styles.View_I1835_2473_1020_12824_1715_4539}>
                    <View style={styles.View_I1835_2473_1020_12824_1715_4363}>
                      <Text style={styles.Text_I1835_2473_1020_12824_1715_4363}>
                        Author
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2473_1020_12824_1715_4364}>
                      <Text style={styles.Text_I1835_2473_1020_12824_1715_4364}>
                        Timestamp
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2473_1020_12824_1715_4365}>
                      <Text style={styles.Text_I1835_2473_1020_12824_1715_4365}>
                        Lorem ipsum
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1835_2473_1020_12824_1715_4531}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c74c/5a5d/8149f140c59610dd87a7e795f66a73d1"
                      }}
                      style={
                        styles.ImageBackground_I1835_2473_1020_12824_1715_4366
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I1835_2473_1020_12824_1715_4367}>
                  <Text style={styles.Text_I1835_2473_1020_12824_1715_4367}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. ”
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2473_1020_12824_1715_4368}>
              <View style={styles.View_I1835_2473_1020_12824_1715_4562}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/627d/11ac/d989619565e30cc29e369b2a7e383e27"
                  }}
                  style={styles.ImageBackground_I1835_2473_1020_12824_1715_4369}
                />
                <View style={styles.View_I1835_2473_1020_12824_1715_4548}>
                  <Text style={styles.Text_I1835_2473_1020_12824_1715_4548}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2473_1020_12824_1715_4628}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a0/c3cf/d2ccd1be493e901403b8e7ec82fda121"
                  }}
                  style={styles.ImageBackground_I1835_2473_1020_12824_1715_4370}
                />
                <View style={styles.View_I1835_2473_1020_12824_1715_4577}>
                  <Text style={styles.Text_I1835_2473_1020_12824_1715_4577}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2473_1020_12824_1715_4610}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af97/831b/e098040954485f985ed266728ad666db"
                  }}
                  style={styles.ImageBackground_I1835_2473_1020_12824_1715_4371}
                />
                <View style={styles.View_I1835_2473_1020_12824_1715_4593}>
                  <Text style={styles.Text_I1835_2473_1020_12824_1715_4593}>
                    99
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09d4/df86/31fe93a26301a1910d89bcf1ab527384"
                }}
                style={styles.ImageBackground_I1835_2473_1020_12824_1715_4372}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1835_2640}>
          <View style={styles.View_I1835_2640_1020_12824}>
            <View style={styles.View_I1835_2640_1020_12824_1715_4647}>
              <View
                style={styles.View_I1835_2640_1020_12824_1715_4647_1348_11418}
              />
            </View>
            <View style={styles.View_I1835_2640_1020_12824_1715_4355}>
              <View style={styles.View_I1835_2640_1020_12824_1715_4356}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c330/7e69/baad80faeafdfeb9ed960cf7e1a6c9e7"
                  }}
                  style={styles.ImageBackground_I1835_2640_1020_12824_1715_4357}
                />
                <View style={styles.View_I1835_2640_1020_12824_1715_4358}>
                  <Text style={styles.Text_I1835_2640_1020_12824_1715_4358}>
                    Danny liked this
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2640_1020_12824_1715_4359}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cd0/3be8/8b8d415565f801d951c9217e81f6b766"
                }}
                style={styles.ImageBackground_I1835_2640_1020_12824_1715_4360}
              />
              <View style={styles.View_I1835_2640_1020_12824_1715_4361}>
                <View style={styles.View_I1835_2640_1020_12824_1715_4362}>
                  <View style={styles.View_I1835_2640_1020_12824_1715_4539}>
                    <View style={styles.View_I1835_2640_1020_12824_1715_4363}>
                      <Text style={styles.Text_I1835_2640_1020_12824_1715_4363}>
                        Author
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2640_1020_12824_1715_4364}>
                      <Text style={styles.Text_I1835_2640_1020_12824_1715_4364}>
                        Timestamp
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2640_1020_12824_1715_4365}>
                      <Text style={styles.Text_I1835_2640_1020_12824_1715_4365}>
                        Lorem ipsum
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1835_2640_1020_12824_1715_4531}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c74c/5a5d/8149f140c59610dd87a7e795f66a73d1"
                      }}
                      style={
                        styles.ImageBackground_I1835_2640_1020_12824_1715_4366
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I1835_2640_1020_12824_1715_4367}>
                  <Text style={styles.Text_I1835_2640_1020_12824_1715_4367}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. ”
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2640_1020_12824_1715_4368}>
              <View style={styles.View_I1835_2640_1020_12824_1715_4562}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/627d/11ac/d989619565e30cc29e369b2a7e383e27"
                  }}
                  style={styles.ImageBackground_I1835_2640_1020_12824_1715_4369}
                />
                <View style={styles.View_I1835_2640_1020_12824_1715_4548}>
                  <Text style={styles.Text_I1835_2640_1020_12824_1715_4548}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2640_1020_12824_1715_4628}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a0/c3cf/d2ccd1be493e901403b8e7ec82fda121"
                  }}
                  style={styles.ImageBackground_I1835_2640_1020_12824_1715_4370}
                />
                <View style={styles.View_I1835_2640_1020_12824_1715_4577}>
                  <Text style={styles.Text_I1835_2640_1020_12824_1715_4577}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2640_1020_12824_1715_4610}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af97/831b/e098040954485f985ed266728ad666db"
                  }}
                  style={styles.ImageBackground_I1835_2640_1020_12824_1715_4371}
                />
                <View style={styles.View_I1835_2640_1020_12824_1715_4593}>
                  <Text style={styles.Text_I1835_2640_1020_12824_1715_4593}>
                    99
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09d4/df86/31fe93a26301a1910d89bcf1ab527384"
                }}
                style={styles.ImageBackground_I1835_2640_1020_12824_1715_4372}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1835_2641}>
          <View style={styles.View_I1835_2641_1020_12824}>
            <View style={styles.View_I1835_2641_1020_12824_1715_4647}>
              <View
                style={styles.View_I1835_2641_1020_12824_1715_4647_1348_11418}
              />
            </View>
            <View style={styles.View_I1835_2641_1020_12824_1715_4355}>
              <View style={styles.View_I1835_2641_1020_12824_1715_4356}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c330/7e69/baad80faeafdfeb9ed960cf7e1a6c9e7"
                  }}
                  style={styles.ImageBackground_I1835_2641_1020_12824_1715_4357}
                />
                <View style={styles.View_I1835_2641_1020_12824_1715_4358}>
                  <Text style={styles.Text_I1835_2641_1020_12824_1715_4358}>
                    Danny liked this
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2641_1020_12824_1715_4359}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cd0/3be8/8b8d415565f801d951c9217e81f6b766"
                }}
                style={styles.ImageBackground_I1835_2641_1020_12824_1715_4360}
              />
              <View style={styles.View_I1835_2641_1020_12824_1715_4361}>
                <View style={styles.View_I1835_2641_1020_12824_1715_4362}>
                  <View style={styles.View_I1835_2641_1020_12824_1715_4539}>
                    <View style={styles.View_I1835_2641_1020_12824_1715_4363}>
                      <Text style={styles.Text_I1835_2641_1020_12824_1715_4363}>
                        Author
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2641_1020_12824_1715_4364}>
                      <Text style={styles.Text_I1835_2641_1020_12824_1715_4364}>
                        Timestamp
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2641_1020_12824_1715_4365}>
                      <Text style={styles.Text_I1835_2641_1020_12824_1715_4365}>
                        Lorem ipsum
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1835_2641_1020_12824_1715_4531}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c74c/5a5d/8149f140c59610dd87a7e795f66a73d1"
                      }}
                      style={
                        styles.ImageBackground_I1835_2641_1020_12824_1715_4366
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I1835_2641_1020_12824_1715_4367}>
                  <Text style={styles.Text_I1835_2641_1020_12824_1715_4367}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. ”
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2641_1020_12824_1715_4368}>
              <View style={styles.View_I1835_2641_1020_12824_1715_4562}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/627d/11ac/d989619565e30cc29e369b2a7e383e27"
                  }}
                  style={styles.ImageBackground_I1835_2641_1020_12824_1715_4369}
                />
                <View style={styles.View_I1835_2641_1020_12824_1715_4548}>
                  <Text style={styles.Text_I1835_2641_1020_12824_1715_4548}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2641_1020_12824_1715_4628}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a0/c3cf/d2ccd1be493e901403b8e7ec82fda121"
                  }}
                  style={styles.ImageBackground_I1835_2641_1020_12824_1715_4370}
                />
                <View style={styles.View_I1835_2641_1020_12824_1715_4577}>
                  <Text style={styles.Text_I1835_2641_1020_12824_1715_4577}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2641_1020_12824_1715_4610}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af97/831b/e098040954485f985ed266728ad666db"
                  }}
                  style={styles.ImageBackground_I1835_2641_1020_12824_1715_4371}
                />
                <View style={styles.View_I1835_2641_1020_12824_1715_4593}>
                  <Text style={styles.Text_I1835_2641_1020_12824_1715_4593}>
                    99
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09d4/df86/31fe93a26301a1910d89bcf1ab527384"
                }}
                style={styles.ImageBackground_I1835_2641_1020_12824_1715_4372}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1835_2642}>
          <View style={styles.View_I1835_2642_1020_12824}>
            <View style={styles.View_I1835_2642_1020_12824_1715_4647}>
              <View
                style={styles.View_I1835_2642_1020_12824_1715_4647_1348_11418}
              />
            </View>
            <View style={styles.View_I1835_2642_1020_12824_1715_4355}>
              <View style={styles.View_I1835_2642_1020_12824_1715_4356}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c330/7e69/baad80faeafdfeb9ed960cf7e1a6c9e7"
                  }}
                  style={styles.ImageBackground_I1835_2642_1020_12824_1715_4357}
                />
                <View style={styles.View_I1835_2642_1020_12824_1715_4358}>
                  <Text style={styles.Text_I1835_2642_1020_12824_1715_4358}>
                    Danny liked this
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2642_1020_12824_1715_4359}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cd0/3be8/8b8d415565f801d951c9217e81f6b766"
                }}
                style={styles.ImageBackground_I1835_2642_1020_12824_1715_4360}
              />
              <View style={styles.View_I1835_2642_1020_12824_1715_4361}>
                <View style={styles.View_I1835_2642_1020_12824_1715_4362}>
                  <View style={styles.View_I1835_2642_1020_12824_1715_4539}>
                    <View style={styles.View_I1835_2642_1020_12824_1715_4363}>
                      <Text style={styles.Text_I1835_2642_1020_12824_1715_4363}>
                        Author
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2642_1020_12824_1715_4364}>
                      <Text style={styles.Text_I1835_2642_1020_12824_1715_4364}>
                        Timestamp
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2642_1020_12824_1715_4365}>
                      <Text style={styles.Text_I1835_2642_1020_12824_1715_4365}>
                        Lorem ipsum
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1835_2642_1020_12824_1715_4531}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c74c/5a5d/8149f140c59610dd87a7e795f66a73d1"
                      }}
                      style={
                        styles.ImageBackground_I1835_2642_1020_12824_1715_4366
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I1835_2642_1020_12824_1715_4367}>
                  <Text style={styles.Text_I1835_2642_1020_12824_1715_4367}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. ”
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2642_1020_12824_1715_4368}>
              <View style={styles.View_I1835_2642_1020_12824_1715_4562}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/627d/11ac/d989619565e30cc29e369b2a7e383e27"
                  }}
                  style={styles.ImageBackground_I1835_2642_1020_12824_1715_4369}
                />
                <View style={styles.View_I1835_2642_1020_12824_1715_4548}>
                  <Text style={styles.Text_I1835_2642_1020_12824_1715_4548}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2642_1020_12824_1715_4628}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a0/c3cf/d2ccd1be493e901403b8e7ec82fda121"
                  }}
                  style={styles.ImageBackground_I1835_2642_1020_12824_1715_4370}
                />
                <View style={styles.View_I1835_2642_1020_12824_1715_4577}>
                  <Text style={styles.Text_I1835_2642_1020_12824_1715_4577}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2642_1020_12824_1715_4610}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af97/831b/e098040954485f985ed266728ad666db"
                  }}
                  style={styles.ImageBackground_I1835_2642_1020_12824_1715_4371}
                />
                <View style={styles.View_I1835_2642_1020_12824_1715_4593}>
                  <Text style={styles.Text_I1835_2642_1020_12824_1715_4593}>
                    99
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09d4/df86/31fe93a26301a1910d89bcf1ab527384"
                }}
                style={styles.ImageBackground_I1835_2642_1020_12824_1715_4372}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1835_2643}>
          <View style={styles.View_I1835_2643_1020_12824}>
            <View style={styles.View_I1835_2643_1020_12824_1715_4647}>
              <View
                style={styles.View_I1835_2643_1020_12824_1715_4647_1348_11418}
              />
            </View>
            <View style={styles.View_I1835_2643_1020_12824_1715_4355}>
              <View style={styles.View_I1835_2643_1020_12824_1715_4356}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c330/7e69/baad80faeafdfeb9ed960cf7e1a6c9e7"
                  }}
                  style={styles.ImageBackground_I1835_2643_1020_12824_1715_4357}
                />
                <View style={styles.View_I1835_2643_1020_12824_1715_4358}>
                  <Text style={styles.Text_I1835_2643_1020_12824_1715_4358}>
                    Danny liked this
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2643_1020_12824_1715_4359}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cd0/3be8/8b8d415565f801d951c9217e81f6b766"
                }}
                style={styles.ImageBackground_I1835_2643_1020_12824_1715_4360}
              />
              <View style={styles.View_I1835_2643_1020_12824_1715_4361}>
                <View style={styles.View_I1835_2643_1020_12824_1715_4362}>
                  <View style={styles.View_I1835_2643_1020_12824_1715_4539}>
                    <View style={styles.View_I1835_2643_1020_12824_1715_4363}>
                      <Text style={styles.Text_I1835_2643_1020_12824_1715_4363}>
                        Author
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2643_1020_12824_1715_4364}>
                      <Text style={styles.Text_I1835_2643_1020_12824_1715_4364}>
                        Timestamp
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2643_1020_12824_1715_4365}>
                      <Text style={styles.Text_I1835_2643_1020_12824_1715_4365}>
                        Lorem ipsum
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1835_2643_1020_12824_1715_4531}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c74c/5a5d/8149f140c59610dd87a7e795f66a73d1"
                      }}
                      style={
                        styles.ImageBackground_I1835_2643_1020_12824_1715_4366
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I1835_2643_1020_12824_1715_4367}>
                  <Text style={styles.Text_I1835_2643_1020_12824_1715_4367}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. ”
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2643_1020_12824_1715_4368}>
              <View style={styles.View_I1835_2643_1020_12824_1715_4562}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/627d/11ac/d989619565e30cc29e369b2a7e383e27"
                  }}
                  style={styles.ImageBackground_I1835_2643_1020_12824_1715_4369}
                />
                <View style={styles.View_I1835_2643_1020_12824_1715_4548}>
                  <Text style={styles.Text_I1835_2643_1020_12824_1715_4548}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2643_1020_12824_1715_4628}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a0/c3cf/d2ccd1be493e901403b8e7ec82fda121"
                  }}
                  style={styles.ImageBackground_I1835_2643_1020_12824_1715_4370}
                />
                <View style={styles.View_I1835_2643_1020_12824_1715_4577}>
                  <Text style={styles.Text_I1835_2643_1020_12824_1715_4577}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2643_1020_12824_1715_4610}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af97/831b/e098040954485f985ed266728ad666db"
                  }}
                  style={styles.ImageBackground_I1835_2643_1020_12824_1715_4371}
                />
                <View style={styles.View_I1835_2643_1020_12824_1715_4593}>
                  <Text style={styles.Text_I1835_2643_1020_12824_1715_4593}>
                    99
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09d4/df86/31fe93a26301a1910d89bcf1ab527384"
                }}
                style={styles.ImageBackground_I1835_2643_1020_12824_1715_4372}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1835_2474}>
          <View style={styles.View_I1835_2474_1020_12824}>
            <View style={styles.View_I1835_2474_1020_12824_1715_4647}>
              <View
                style={styles.View_I1835_2474_1020_12824_1715_4647_1348_11418}
              />
            </View>
            <View style={styles.View_I1835_2474_1020_12824_1715_4355}>
              <View style={styles.View_I1835_2474_1020_12824_1715_4356}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c330/7e69/baad80faeafdfeb9ed960cf7e1a6c9e7"
                  }}
                  style={styles.ImageBackground_I1835_2474_1020_12824_1715_4357}
                />
                <View style={styles.View_I1835_2474_1020_12824_1715_4358}>
                  <Text style={styles.Text_I1835_2474_1020_12824_1715_4358}>
                    Danny liked this
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2474_1020_12824_1715_4359}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cd0/3be8/8b8d415565f801d951c9217e81f6b766"
                }}
                style={styles.ImageBackground_I1835_2474_1020_12824_1715_4360}
              />
              <View style={styles.View_I1835_2474_1020_12824_1715_4361}>
                <View style={styles.View_I1835_2474_1020_12824_1715_4362}>
                  <View style={styles.View_I1835_2474_1020_12824_1715_4539}>
                    <View style={styles.View_I1835_2474_1020_12824_1715_4363}>
                      <Text style={styles.Text_I1835_2474_1020_12824_1715_4363}>
                        Author
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2474_1020_12824_1715_4364}>
                      <Text style={styles.Text_I1835_2474_1020_12824_1715_4364}>
                        Timestamp
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2474_1020_12824_1715_4365}>
                      <Text style={styles.Text_I1835_2474_1020_12824_1715_4365}>
                        Lorem ipsum
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1835_2474_1020_12824_1715_4531}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c74c/5a5d/8149f140c59610dd87a7e795f66a73d1"
                      }}
                      style={
                        styles.ImageBackground_I1835_2474_1020_12824_1715_4366
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I1835_2474_1020_12824_1715_4367}>
                  <Text style={styles.Text_I1835_2474_1020_12824_1715_4367}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. ”
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2474_1020_12824_1715_4368}>
              <View style={styles.View_I1835_2474_1020_12824_1715_4562}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/627d/11ac/d989619565e30cc29e369b2a7e383e27"
                  }}
                  style={styles.ImageBackground_I1835_2474_1020_12824_1715_4369}
                />
                <View style={styles.View_I1835_2474_1020_12824_1715_4548}>
                  <Text style={styles.Text_I1835_2474_1020_12824_1715_4548}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2474_1020_12824_1715_4628}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a0/c3cf/d2ccd1be493e901403b8e7ec82fda121"
                  }}
                  style={styles.ImageBackground_I1835_2474_1020_12824_1715_4370}
                />
                <View style={styles.View_I1835_2474_1020_12824_1715_4577}>
                  <Text style={styles.Text_I1835_2474_1020_12824_1715_4577}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2474_1020_12824_1715_4610}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af97/831b/e098040954485f985ed266728ad666db"
                  }}
                  style={styles.ImageBackground_I1835_2474_1020_12824_1715_4371}
                />
                <View style={styles.View_I1835_2474_1020_12824_1715_4593}>
                  <Text style={styles.Text_I1835_2474_1020_12824_1715_4593}>
                    99
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09d4/df86/31fe93a26301a1910d89bcf1ab527384"
                }}
                style={styles.ImageBackground_I1835_2474_1020_12824_1715_4372}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1835_2475}>
          <View style={styles.View_I1835_2475_1020_12824}>
            <View style={styles.View_I1835_2475_1020_12824_1715_4647}>
              <View
                style={styles.View_I1835_2475_1020_12824_1715_4647_1348_11418}
              />
            </View>
            <View style={styles.View_I1835_2475_1020_12824_1715_4355}>
              <View style={styles.View_I1835_2475_1020_12824_1715_4356}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c330/7e69/baad80faeafdfeb9ed960cf7e1a6c9e7"
                  }}
                  style={styles.ImageBackground_I1835_2475_1020_12824_1715_4357}
                />
                <View style={styles.View_I1835_2475_1020_12824_1715_4358}>
                  <Text style={styles.Text_I1835_2475_1020_12824_1715_4358}>
                    Danny liked this
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2475_1020_12824_1715_4359}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cd0/3be8/8b8d415565f801d951c9217e81f6b766"
                }}
                style={styles.ImageBackground_I1835_2475_1020_12824_1715_4360}
              />
              <View style={styles.View_I1835_2475_1020_12824_1715_4361}>
                <View style={styles.View_I1835_2475_1020_12824_1715_4362}>
                  <View style={styles.View_I1835_2475_1020_12824_1715_4539}>
                    <View style={styles.View_I1835_2475_1020_12824_1715_4363}>
                      <Text style={styles.Text_I1835_2475_1020_12824_1715_4363}>
                        Author
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2475_1020_12824_1715_4364}>
                      <Text style={styles.Text_I1835_2475_1020_12824_1715_4364}>
                        Timestamp
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2475_1020_12824_1715_4365}>
                      <Text style={styles.Text_I1835_2475_1020_12824_1715_4365}>
                        Lorem ipsum
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1835_2475_1020_12824_1715_4531}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c74c/5a5d/8149f140c59610dd87a7e795f66a73d1"
                      }}
                      style={
                        styles.ImageBackground_I1835_2475_1020_12824_1715_4366
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I1835_2475_1020_12824_1715_4367}>
                  <Text style={styles.Text_I1835_2475_1020_12824_1715_4367}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. ”
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2475_1020_12824_1715_4368}>
              <View style={styles.View_I1835_2475_1020_12824_1715_4562}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/627d/11ac/d989619565e30cc29e369b2a7e383e27"
                  }}
                  style={styles.ImageBackground_I1835_2475_1020_12824_1715_4369}
                />
                <View style={styles.View_I1835_2475_1020_12824_1715_4548}>
                  <Text style={styles.Text_I1835_2475_1020_12824_1715_4548}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2475_1020_12824_1715_4628}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a0/c3cf/d2ccd1be493e901403b8e7ec82fda121"
                  }}
                  style={styles.ImageBackground_I1835_2475_1020_12824_1715_4370}
                />
                <View style={styles.View_I1835_2475_1020_12824_1715_4577}>
                  <Text style={styles.Text_I1835_2475_1020_12824_1715_4577}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2475_1020_12824_1715_4610}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af97/831b/e098040954485f985ed266728ad666db"
                  }}
                  style={styles.ImageBackground_I1835_2475_1020_12824_1715_4371}
                />
                <View style={styles.View_I1835_2475_1020_12824_1715_4593}>
                  <Text style={styles.Text_I1835_2475_1020_12824_1715_4593}>
                    99
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09d4/df86/31fe93a26301a1910d89bcf1ab527384"
                }}
                style={styles.ImageBackground_I1835_2475_1020_12824_1715_4372}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1835_2389}>
          <View style={styles.View_I1835_2389_1020_12824}>
            <View style={styles.View_I1835_2389_1020_12824_1715_4647}>
              <View
                style={styles.View_I1835_2389_1020_12824_1715_4647_1348_11418}
              />
            </View>
            <View style={styles.View_I1835_2389_1020_12824_1715_4355}>
              <View style={styles.View_I1835_2389_1020_12824_1715_4356}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c330/7e69/baad80faeafdfeb9ed960cf7e1a6c9e7"
                  }}
                  style={styles.ImageBackground_I1835_2389_1020_12824_1715_4357}
                />
                <View style={styles.View_I1835_2389_1020_12824_1715_4358}>
                  <Text style={styles.Text_I1835_2389_1020_12824_1715_4358}>
                    Danny liked this
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2389_1020_12824_1715_4359}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cd0/3be8/8b8d415565f801d951c9217e81f6b766"
                }}
                style={styles.ImageBackground_I1835_2389_1020_12824_1715_4360}
              />
              <View style={styles.View_I1835_2389_1020_12824_1715_4361}>
                <View style={styles.View_I1835_2389_1020_12824_1715_4362}>
                  <View style={styles.View_I1835_2389_1020_12824_1715_4539}>
                    <View style={styles.View_I1835_2389_1020_12824_1715_4363}>
                      <Text style={styles.Text_I1835_2389_1020_12824_1715_4363}>
                        Author
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2389_1020_12824_1715_4364}>
                      <Text style={styles.Text_I1835_2389_1020_12824_1715_4364}>
                        Timestamp
                      </Text>
                    </View>
                    <View style={styles.View_I1835_2389_1020_12824_1715_4365}>
                      <Text style={styles.Text_I1835_2389_1020_12824_1715_4365}>
                        Lorem ipsum
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1835_2389_1020_12824_1715_4531}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c74c/5a5d/8149f140c59610dd87a7e795f66a73d1"
                      }}
                      style={
                        styles.ImageBackground_I1835_2389_1020_12824_1715_4366
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I1835_2389_1020_12824_1715_4367}>
                  <Text style={styles.Text_I1835_2389_1020_12824_1715_4367}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. ”
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1835_2389_1020_12824_1715_4368}>
              <View style={styles.View_I1835_2389_1020_12824_1715_4562}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/627d/11ac/d989619565e30cc29e369b2a7e383e27"
                  }}
                  style={styles.ImageBackground_I1835_2389_1020_12824_1715_4369}
                />
                <View style={styles.View_I1835_2389_1020_12824_1715_4548}>
                  <Text style={styles.Text_I1835_2389_1020_12824_1715_4548}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2389_1020_12824_1715_4628}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44a0/c3cf/d2ccd1be493e901403b8e7ec82fda121"
                  }}
                  style={styles.ImageBackground_I1835_2389_1020_12824_1715_4370}
                />
                <View style={styles.View_I1835_2389_1020_12824_1715_4577}>
                  <Text style={styles.Text_I1835_2389_1020_12824_1715_4577}>
                    99
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1835_2389_1020_12824_1715_4610}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af97/831b/e098040954485f985ed266728ad666db"
                  }}
                  style={styles.ImageBackground_I1835_2389_1020_12824_1715_4371}
                />
                <View style={styles.View_I1835_2389_1020_12824_1715_4593}>
                  <Text style={styles.Text_I1835_2389_1020_12824_1715_4593}>
                    99
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09d4/df86/31fe93a26301a1910d89bcf1ab527384"
                }}
                style={styles.ImageBackground_I1835_2389_1020_12824_1715_4372}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1834_2641}>
        <View style={styles.View_I1834_2641_1805_3173}>
          <View style={styles.View_I1834_2641_1805_3209} />
          <View style={styles.View_I1834_2641_1805_3174}>
            <View style={styles.View_I1834_2641_1805_3174_2341_5373}>
              <View style={styles.View_I1834_2641_1805_3174_2341_5374}>
                <View style={styles.View_I1834_2641_1805_3174_2341_5375}>
                  <Text style={styles.Text_I1834_2641_1805_3174_2341_5375}>
                    Placeholder
                  </Text>
                </View>
                <View style={styles.View_I1834_2641_1805_3174_2341_5376}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95c6/da65/c317a2f7a18fd952dc963fcb8bcca157"
                    }}
                    style={
                      styles.ImageBackground_I1834_2641_1805_3174_2341_5376_1006_11594
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I1834_2641_1805_3168}>
            <View style={styles.View_I1834_2641_1805_3169}>
              <Text style={styles.Text_I1834_2641_1805_3169}>Home</Text>
            </View>
            <View style={styles.View_I1834_2641_1805_3170}>
              <Text style={styles.Text_I1834_2641_1805_3170}>About</Text>
            </View>
            <View style={styles.View_I1834_2641_1805_3171}>
              <Text style={styles.Text_I1834_2641_1805_3171}>Pricing</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30ba/02c1/de743a032b8600529e6e3a6ff5a6c0c8"
            }}
            style={styles.ImageBackground_I1834_2641_1805_3176}
          />
        </View>
      </View>
      <View style={styles.View_1834_2642}>
        <View style={styles.View_I1834_2642_1805_3359}>
          <View style={styles.View_I1834_2642_1805_3570}>
            <View style={styles.View_I1834_2642_1805_3228} />
            <View style={styles.View_I1834_2642_1805_3355}>
              <View style={styles.View_I1834_2642_1805_4244}>
                <Text style={styles.Text_I1834_2642_1805_4244}>
                  ORGANIZATION
                </Text>
              </View>
              <View style={styles.View_I1834_2642_1805_3308}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ad7/9147/99b2ae7140ddda8fcd5077c10eb97e0d"
                  }}
                  style={styles.ImageBackground_I1834_2642_1805_3230}
                />
                <View style={styles.View_I1834_2642_1805_3229}>
                  <Text style={styles.Text_I1834_2642_1805_3229}>
                    Lorem Ipsum
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1834_2642_1805_3309}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ad7/9147/99b2ae7140ddda8fcd5077c10eb97e0d"
                  }}
                  style={styles.ImageBackground_I1834_2642_1805_3310}
                />
                <View style={styles.View_I1834_2642_1805_3311}>
                  <Text style={styles.Text_I1834_2642_1805_3311}>
                    Lorem Ipsum
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1834_2642_1805_3501}>
              <View style={styles.View_I1834_2642_1805_3227}>
                <Text style={styles.Text_I1834_2642_1805_3227}>
                  ORGANIZATION
                </Text>
              </View>
              <View style={styles.View_I1834_2642_1805_3324}>
                <View style={styles.View_I1834_2642_1805_3314}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ad7/9147/99b2ae7140ddda8fcd5077c10eb97e0d"
                    }}
                    style={styles.ImageBackground_I1834_2642_1805_3315}
                  />
                  <View style={styles.View_I1834_2642_1805_3316}>
                    <Text style={styles.Text_I1834_2642_1805_3316}>
                      Lorem Ipsum
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I1834_2642_1805_3317}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ad7/9147/99b2ae7140ddda8fcd5077c10eb97e0d"
                    }}
                    style={styles.ImageBackground_I1834_2642_1805_3318}
                  />
                  <View style={styles.View_I1834_2642_1805_3319}>
                    <Text style={styles.Text_I1834_2642_1805_3319}>
                      Lorem Ipsum
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I1834_2642_1805_3325}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ad7/9147/99b2ae7140ddda8fcd5077c10eb97e0d"
                    }}
                    style={styles.ImageBackground_I1834_2642_1805_3326}
                  />
                  <View style={styles.View_I1834_2642_1805_3327}>
                    <Text style={styles.Text_I1834_2642_1805_3327}>
                      Lorem Ipsum
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I1834_2642_1805_3328}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ad7/9147/99b2ae7140ddda8fcd5077c10eb97e0d"
                    }}
                    style={styles.ImageBackground_I1834_2642_1805_3329}
                  />
                  <View style={styles.View_I1834_2642_1805_3330}>
                    <Text style={styles.Text_I1834_2642_1805_3330}>
                      Lorem Ipsum
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I1834_2642_1805_3335}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ad7/9147/99b2ae7140ddda8fcd5077c10eb97e0d"
                    }}
                    style={styles.ImageBackground_I1834_2642_1805_3336}
                  />
                  <View style={styles.View_I1834_2642_1805_3337}>
                    <Text style={styles.Text_I1834_2642_1805_3337}>
                      Lorem Ipsum
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I1834_2642_1805_3338}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ad7/9147/99b2ae7140ddda8fcd5077c10eb97e0d"
                    }}
                    style={styles.ImageBackground_I1834_2642_1805_3339}
                  />
                  <View style={styles.View_I1834_2642_1805_3340}>
                    <Text style={styles.Text_I1834_2642_1805_3340}>
                      Lorem Ipsum
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I1834_2642_1805_3341}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ad7/9147/99b2ae7140ddda8fcd5077c10eb97e0d"
                    }}
                    style={styles.ImageBackground_I1834_2642_1805_3342}
                  />
                  <View style={styles.View_I1834_2642_1805_3343}>
                    <Text style={styles.Text_I1834_2642_1805_3343}>
                      Lorem Ipsum
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I1834_2642_1805_3344}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ad7/9147/99b2ae7140ddda8fcd5077c10eb97e0d"
                    }}
                    style={styles.ImageBackground_I1834_2642_1805_3345}
                  />
                  <View style={styles.View_I1834_2642_1805_3346}>
                    <Text style={styles.Text_I1834_2642_1805_3346}>
                      Lorem Ipsum
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I1834_2642_1805_3976}>
            <View style={styles.View_I1834_2642_1805_3295}>
              <View style={styles.View_I1834_2642_1805_3295_1348_11418} />
            </View>
            <View style={styles.View_I1834_2642_1805_3358}>
              <View style={styles.View_I1834_2642_1805_3357}>
                <View style={styles.View_I1834_2642_1805_3298} />
                <View style={styles.View_I1834_2642_1805_3356}>
                  <View style={styles.View_I1834_2642_1805_3299}>
                    <Text style={styles.Text_I1834_2642_1805_3299}>
                      Lorem Ipsum
                    </Text>
                  </View>
                  <View style={styles.View_I1834_2642_1805_3300}>
                    <Text style={styles.Text_I1834_2642_1805_3300}>
                      Lorem Ipsum
                    </Text>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0da7/2463/f6c8301b127a2e8e28411dc6fcb47cd2"
                }}
                style={styles.ImageBackground_I1834_2642_1805_3301}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("328%") },
  View_1835_2387: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("419%"),
    minHeight: hp("419%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("-19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1835_2345: {
    width: wp("53%"),
    height: hp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2345_1020_12824: {
    flexGrow: 1,
    width: wp("51%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2345_1020_12824_1715_4647: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2345_1020_12824_1715_4647_1348_11418: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  },
  View_I1835_2345_1020_12824_1715_4355: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2345_1020_12824_1715_4356: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2345_1020_12824_1715_4357: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2345_1020_12824_1715_4358: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2345_1020_12824_1715_4358: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1835_2345_1020_12824_1715_4359: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2345_1020_12824_1715_4360: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1835_2345_1020_12824_1715_4361: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2345_1020_12824_1715_4362: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2345_1020_12824_1715_4539: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2345_1020_12824_1715_4363: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2345_1020_12824_1715_4363: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2345_1020_12824_1715_4364: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2345_1020_12824_1715_4364: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2345_1020_12824_1715_4365: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2345_1020_12824_1715_4365: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2345_1020_12824_1715_4531: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2345_1020_12824_1715_4366: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I1835_2345_1020_12824_1715_4367: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2345_1020_12824_1715_4367: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2345_1020_12824_1715_4368: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2345_1020_12824_1715_4562: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2345_1020_12824_1715_4369: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2345_1020_12824_1715_4548: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2345_1020_12824_1715_4548: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2345_1020_12824_1715_4628: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2345_1020_12824_1715_4370: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2345_1020_12824_1715_4577: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2345_1020_12824_1715_4577: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2345_1020_12824_1715_4610: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2345_1020_12824_1715_4371: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2345_1020_12824_1715_4593: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2345_1020_12824_1715_4593: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_I1835_2345_1020_12824_1715_4372: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_1835_2303: {
    width: wp("53%"),
    height: hp("33%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2303_1020_12824: {
    flexGrow: 1,
    width: wp("51%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2303_1020_12824_1715_4647: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2303_1020_12824_1715_4647_1348_11418: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  },
  View_I1835_2303_1020_12824_1715_4355: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2303_1020_12824_1715_4356: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2303_1020_12824_1715_4357: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2303_1020_12824_1715_4358: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2303_1020_12824_1715_4358: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1835_2303_1020_12824_1715_4359: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2303_1020_12824_1715_4360: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1835_2303_1020_12824_1715_4361: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2303_1020_12824_1715_4362: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2303_1020_12824_1715_4539: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2303_1020_12824_1715_4363: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2303_1020_12824_1715_4363: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2303_1020_12824_1715_4364: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2303_1020_12824_1715_4364: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2303_1020_12824_1715_4365: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2303_1020_12824_1715_4365: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2303_1020_12824_1715_4531: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2303_1020_12824_1715_4366: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I1835_2303_1020_12824_1715_4367: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2303_1020_12824_1715_4367: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2303_1020_12824_1715_4368: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2303_1020_12824_1715_4562: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2303_1020_12824_1715_4369: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2303_1020_12824_1715_4548: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2303_1020_12824_1715_4548: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2303_1020_12824_1715_4628: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2303_1020_12824_1715_4370: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2303_1020_12824_1715_4577: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2303_1020_12824_1715_4577: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2303_1020_12824_1715_4610: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2303_1020_12824_1715_4371: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2303_1020_12824_1715_4593: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2303_1020_12824_1715_4593: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_I1835_2303_1020_12824_1715_4372: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_1835_2388: {
    width: wp("53%"),
    height: hp("33%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2388_1020_12824: {
    flexGrow: 1,
    width: wp("51%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2388_1020_12824_1715_4647: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2388_1020_12824_1715_4647_1348_11418: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  },
  View_I1835_2388_1020_12824_1715_4355: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2388_1020_12824_1715_4356: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2388_1020_12824_1715_4357: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2388_1020_12824_1715_4358: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2388_1020_12824_1715_4358: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1835_2388_1020_12824_1715_4359: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2388_1020_12824_1715_4360: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1835_2388_1020_12824_1715_4361: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2388_1020_12824_1715_4362: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2388_1020_12824_1715_4539: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2388_1020_12824_1715_4363: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2388_1020_12824_1715_4363: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2388_1020_12824_1715_4364: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2388_1020_12824_1715_4364: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2388_1020_12824_1715_4365: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2388_1020_12824_1715_4365: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2388_1020_12824_1715_4531: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2388_1020_12824_1715_4366: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I1835_2388_1020_12824_1715_4367: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2388_1020_12824_1715_4367: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2388_1020_12824_1715_4368: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2388_1020_12824_1715_4562: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2388_1020_12824_1715_4369: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2388_1020_12824_1715_4548: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2388_1020_12824_1715_4548: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2388_1020_12824_1715_4628: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2388_1020_12824_1715_4370: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2388_1020_12824_1715_4577: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2388_1020_12824_1715_4577: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2388_1020_12824_1715_4610: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2388_1020_12824_1715_4371: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2388_1020_12824_1715_4593: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2388_1020_12824_1715_4593: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_I1835_2388_1020_12824_1715_4372: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_1835_2472: {
    width: wp("53%"),
    height: hp("33%"),
    top: hp("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2472_1020_12824: {
    flexGrow: 1,
    width: wp("51%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2472_1020_12824_1715_4647: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2472_1020_12824_1715_4647_1348_11418: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  },
  View_I1835_2472_1020_12824_1715_4355: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2472_1020_12824_1715_4356: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2472_1020_12824_1715_4357: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2472_1020_12824_1715_4358: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2472_1020_12824_1715_4358: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1835_2472_1020_12824_1715_4359: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2472_1020_12824_1715_4360: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1835_2472_1020_12824_1715_4361: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2472_1020_12824_1715_4362: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2472_1020_12824_1715_4539: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2472_1020_12824_1715_4363: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2472_1020_12824_1715_4363: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2472_1020_12824_1715_4364: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2472_1020_12824_1715_4364: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2472_1020_12824_1715_4365: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2472_1020_12824_1715_4365: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2472_1020_12824_1715_4531: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2472_1020_12824_1715_4366: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I1835_2472_1020_12824_1715_4367: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2472_1020_12824_1715_4367: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2472_1020_12824_1715_4368: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2472_1020_12824_1715_4562: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2472_1020_12824_1715_4369: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2472_1020_12824_1715_4548: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2472_1020_12824_1715_4548: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2472_1020_12824_1715_4628: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2472_1020_12824_1715_4370: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2472_1020_12824_1715_4577: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2472_1020_12824_1715_4577: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2472_1020_12824_1715_4610: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2472_1020_12824_1715_4371: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2472_1020_12824_1715_4593: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2472_1020_12824_1715_4593: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_I1835_2472_1020_12824_1715_4372: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_1835_2473: {
    width: wp("53%"),
    height: hp("33%"),
    top: hp("140%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2473_1020_12824: {
    flexGrow: 1,
    width: wp("51%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2473_1020_12824_1715_4647: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2473_1020_12824_1715_4647_1348_11418: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  },
  View_I1835_2473_1020_12824_1715_4355: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2473_1020_12824_1715_4356: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2473_1020_12824_1715_4357: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2473_1020_12824_1715_4358: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2473_1020_12824_1715_4358: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1835_2473_1020_12824_1715_4359: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2473_1020_12824_1715_4360: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1835_2473_1020_12824_1715_4361: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2473_1020_12824_1715_4362: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2473_1020_12824_1715_4539: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2473_1020_12824_1715_4363: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2473_1020_12824_1715_4363: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2473_1020_12824_1715_4364: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2473_1020_12824_1715_4364: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2473_1020_12824_1715_4365: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2473_1020_12824_1715_4365: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2473_1020_12824_1715_4531: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2473_1020_12824_1715_4366: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I1835_2473_1020_12824_1715_4367: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2473_1020_12824_1715_4367: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2473_1020_12824_1715_4368: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2473_1020_12824_1715_4562: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2473_1020_12824_1715_4369: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2473_1020_12824_1715_4548: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2473_1020_12824_1715_4548: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2473_1020_12824_1715_4628: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2473_1020_12824_1715_4370: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2473_1020_12824_1715_4577: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2473_1020_12824_1715_4577: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2473_1020_12824_1715_4610: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2473_1020_12824_1715_4371: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2473_1020_12824_1715_4593: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2473_1020_12824_1715_4593: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_I1835_2473_1020_12824_1715_4372: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_1835_2640: {
    width: wp("53%"),
    height: hp("33%"),
    top: hp("176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2640_1020_12824: {
    flexGrow: 1,
    width: wp("51%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2640_1020_12824_1715_4647: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2640_1020_12824_1715_4647_1348_11418: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  },
  View_I1835_2640_1020_12824_1715_4355: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2640_1020_12824_1715_4356: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2640_1020_12824_1715_4357: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2640_1020_12824_1715_4358: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2640_1020_12824_1715_4358: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1835_2640_1020_12824_1715_4359: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2640_1020_12824_1715_4360: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1835_2640_1020_12824_1715_4361: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2640_1020_12824_1715_4362: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2640_1020_12824_1715_4539: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2640_1020_12824_1715_4363: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2640_1020_12824_1715_4363: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2640_1020_12824_1715_4364: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2640_1020_12824_1715_4364: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2640_1020_12824_1715_4365: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2640_1020_12824_1715_4365: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2640_1020_12824_1715_4531: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2640_1020_12824_1715_4366: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I1835_2640_1020_12824_1715_4367: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2640_1020_12824_1715_4367: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2640_1020_12824_1715_4368: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2640_1020_12824_1715_4562: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2640_1020_12824_1715_4369: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2640_1020_12824_1715_4548: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2640_1020_12824_1715_4548: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2640_1020_12824_1715_4628: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2640_1020_12824_1715_4370: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2640_1020_12824_1715_4577: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2640_1020_12824_1715_4577: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2640_1020_12824_1715_4610: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2640_1020_12824_1715_4371: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2640_1020_12824_1715_4593: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2640_1020_12824_1715_4593: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_I1835_2640_1020_12824_1715_4372: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_1835_2641: {
    width: wp("53%"),
    height: hp("33%"),
    top: hp("211%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2641_1020_12824: {
    flexGrow: 1,
    width: wp("51%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2641_1020_12824_1715_4647: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2641_1020_12824_1715_4647_1348_11418: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  },
  View_I1835_2641_1020_12824_1715_4355: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2641_1020_12824_1715_4356: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2641_1020_12824_1715_4357: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2641_1020_12824_1715_4358: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2641_1020_12824_1715_4358: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1835_2641_1020_12824_1715_4359: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2641_1020_12824_1715_4360: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1835_2641_1020_12824_1715_4361: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2641_1020_12824_1715_4362: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2641_1020_12824_1715_4539: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2641_1020_12824_1715_4363: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2641_1020_12824_1715_4363: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2641_1020_12824_1715_4364: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2641_1020_12824_1715_4364: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2641_1020_12824_1715_4365: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2641_1020_12824_1715_4365: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2641_1020_12824_1715_4531: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2641_1020_12824_1715_4366: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I1835_2641_1020_12824_1715_4367: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2641_1020_12824_1715_4367: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2641_1020_12824_1715_4368: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2641_1020_12824_1715_4562: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2641_1020_12824_1715_4369: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2641_1020_12824_1715_4548: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2641_1020_12824_1715_4548: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2641_1020_12824_1715_4628: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2641_1020_12824_1715_4370: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2641_1020_12824_1715_4577: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2641_1020_12824_1715_4577: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2641_1020_12824_1715_4610: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2641_1020_12824_1715_4371: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2641_1020_12824_1715_4593: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2641_1020_12824_1715_4593: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_I1835_2641_1020_12824_1715_4372: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_1835_2642: {
    width: wp("53%"),
    height: hp("33%"),
    top: hp("246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2642_1020_12824: {
    flexGrow: 1,
    width: wp("51%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2642_1020_12824_1715_4647: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2642_1020_12824_1715_4647_1348_11418: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  },
  View_I1835_2642_1020_12824_1715_4355: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2642_1020_12824_1715_4356: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2642_1020_12824_1715_4357: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2642_1020_12824_1715_4358: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2642_1020_12824_1715_4358: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1835_2642_1020_12824_1715_4359: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2642_1020_12824_1715_4360: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1835_2642_1020_12824_1715_4361: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2642_1020_12824_1715_4362: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2642_1020_12824_1715_4539: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2642_1020_12824_1715_4363: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2642_1020_12824_1715_4363: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2642_1020_12824_1715_4364: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2642_1020_12824_1715_4364: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2642_1020_12824_1715_4365: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2642_1020_12824_1715_4365: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2642_1020_12824_1715_4531: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2642_1020_12824_1715_4366: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I1835_2642_1020_12824_1715_4367: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2642_1020_12824_1715_4367: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2642_1020_12824_1715_4368: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2642_1020_12824_1715_4562: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2642_1020_12824_1715_4369: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2642_1020_12824_1715_4548: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2642_1020_12824_1715_4548: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2642_1020_12824_1715_4628: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2642_1020_12824_1715_4370: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2642_1020_12824_1715_4577: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2642_1020_12824_1715_4577: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2642_1020_12824_1715_4610: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2642_1020_12824_1715_4371: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2642_1020_12824_1715_4593: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2642_1020_12824_1715_4593: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_I1835_2642_1020_12824_1715_4372: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_1835_2643: {
    width: wp("53%"),
    height: hp("33%"),
    top: hp("281%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2643_1020_12824: {
    flexGrow: 1,
    width: wp("51%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2643_1020_12824_1715_4647: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2643_1020_12824_1715_4647_1348_11418: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  },
  View_I1835_2643_1020_12824_1715_4355: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2643_1020_12824_1715_4356: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2643_1020_12824_1715_4357: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2643_1020_12824_1715_4358: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2643_1020_12824_1715_4358: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1835_2643_1020_12824_1715_4359: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2643_1020_12824_1715_4360: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1835_2643_1020_12824_1715_4361: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2643_1020_12824_1715_4362: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2643_1020_12824_1715_4539: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2643_1020_12824_1715_4363: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2643_1020_12824_1715_4363: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2643_1020_12824_1715_4364: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2643_1020_12824_1715_4364: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2643_1020_12824_1715_4365: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2643_1020_12824_1715_4365: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2643_1020_12824_1715_4531: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2643_1020_12824_1715_4366: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I1835_2643_1020_12824_1715_4367: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2643_1020_12824_1715_4367: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2643_1020_12824_1715_4368: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2643_1020_12824_1715_4562: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2643_1020_12824_1715_4369: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2643_1020_12824_1715_4548: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2643_1020_12824_1715_4548: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2643_1020_12824_1715_4628: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2643_1020_12824_1715_4370: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2643_1020_12824_1715_4577: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2643_1020_12824_1715_4577: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2643_1020_12824_1715_4610: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2643_1020_12824_1715_4371: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2643_1020_12824_1715_4593: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2643_1020_12824_1715_4593: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_I1835_2643_1020_12824_1715_4372: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_1835_2474: {
    width: wp("53%"),
    height: hp("33%"),
    top: hp("316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2474_1020_12824: {
    flexGrow: 1,
    width: wp("51%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2474_1020_12824_1715_4647: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2474_1020_12824_1715_4647_1348_11418: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  },
  View_I1835_2474_1020_12824_1715_4355: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2474_1020_12824_1715_4356: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2474_1020_12824_1715_4357: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2474_1020_12824_1715_4358: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2474_1020_12824_1715_4358: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1835_2474_1020_12824_1715_4359: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2474_1020_12824_1715_4360: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1835_2474_1020_12824_1715_4361: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2474_1020_12824_1715_4362: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2474_1020_12824_1715_4539: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2474_1020_12824_1715_4363: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2474_1020_12824_1715_4363: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2474_1020_12824_1715_4364: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2474_1020_12824_1715_4364: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2474_1020_12824_1715_4365: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2474_1020_12824_1715_4365: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2474_1020_12824_1715_4531: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2474_1020_12824_1715_4366: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I1835_2474_1020_12824_1715_4367: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2474_1020_12824_1715_4367: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2474_1020_12824_1715_4368: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2474_1020_12824_1715_4562: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2474_1020_12824_1715_4369: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2474_1020_12824_1715_4548: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2474_1020_12824_1715_4548: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2474_1020_12824_1715_4628: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2474_1020_12824_1715_4370: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2474_1020_12824_1715_4577: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2474_1020_12824_1715_4577: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2474_1020_12824_1715_4610: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2474_1020_12824_1715_4371: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2474_1020_12824_1715_4593: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2474_1020_12824_1715_4593: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_I1835_2474_1020_12824_1715_4372: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_1835_2475: {
    width: wp("53%"),
    height: hp("33%"),
    top: hp("351%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2475_1020_12824: {
    flexGrow: 1,
    width: wp("51%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2475_1020_12824_1715_4647: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2475_1020_12824_1715_4647_1348_11418: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  },
  View_I1835_2475_1020_12824_1715_4355: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2475_1020_12824_1715_4356: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2475_1020_12824_1715_4357: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2475_1020_12824_1715_4358: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2475_1020_12824_1715_4358: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1835_2475_1020_12824_1715_4359: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2475_1020_12824_1715_4360: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1835_2475_1020_12824_1715_4361: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2475_1020_12824_1715_4362: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2475_1020_12824_1715_4539: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2475_1020_12824_1715_4363: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2475_1020_12824_1715_4363: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2475_1020_12824_1715_4364: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2475_1020_12824_1715_4364: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2475_1020_12824_1715_4365: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2475_1020_12824_1715_4365: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2475_1020_12824_1715_4531: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2475_1020_12824_1715_4366: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I1835_2475_1020_12824_1715_4367: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2475_1020_12824_1715_4367: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2475_1020_12824_1715_4368: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2475_1020_12824_1715_4562: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2475_1020_12824_1715_4369: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2475_1020_12824_1715_4548: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2475_1020_12824_1715_4548: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2475_1020_12824_1715_4628: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2475_1020_12824_1715_4370: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2475_1020_12824_1715_4577: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2475_1020_12824_1715_4577: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2475_1020_12824_1715_4610: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2475_1020_12824_1715_4371: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2475_1020_12824_1715_4593: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2475_1020_12824_1715_4593: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_I1835_2475_1020_12824_1715_4372: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_1835_2389: {
    width: wp("53%"),
    height: hp("33%"),
    top: hp("386%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2389_1020_12824: {
    flexGrow: 1,
    width: wp("51%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1835_2389_1020_12824_1715_4647: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2389_1020_12824_1715_4647_1348_11418: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  },
  View_I1835_2389_1020_12824_1715_4355: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2389_1020_12824_1715_4356: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2389_1020_12824_1715_4357: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2389_1020_12824_1715_4358: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2389_1020_12824_1715_4358: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1835_2389_1020_12824_1715_4359: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2389_1020_12824_1715_4360: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1835_2389_1020_12824_1715_4361: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2389_1020_12824_1715_4362: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2389_1020_12824_1715_4539: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2389_1020_12824_1715_4363: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2389_1020_12824_1715_4363: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2389_1020_12824_1715_4364: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2389_1020_12824_1715_4364: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2389_1020_12824_1715_4365: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2389_1020_12824_1715_4365: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2389_1020_12824_1715_4531: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2389_1020_12824_1715_4366: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I1835_2389_1020_12824_1715_4367: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2389_1020_12824_1715_4367: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2389_1020_12824_1715_4368: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1835_2389_1020_12824_1715_4562: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2389_1020_12824_1715_4369: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2389_1020_12824_1715_4548: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2389_1020_12824_1715_4548: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2389_1020_12824_1715_4628: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2389_1020_12824_1715_4370: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2389_1020_12824_1715_4577: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2389_1020_12824_1715_4577: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1835_2389_1020_12824_1715_4610: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1835_2389_1020_12824_1715_4371: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1835_2389_1020_12824_1715_4593: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1835_2389_1020_12824_1715_4593: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_I1835_2389_1020_12824_1715_4372: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_1834_2641: {
    width: wp("100%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1834_2641_1805_3173: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1834_2641_1805_3209: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I1834_2641_1805_3174: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1834_2641_1805_3174_2341_5373: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1834_2641_1805_3174_2341_5374: {
    width: wp("21%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1834_2641_1805_3174_2341_5375: {
    width: wp("16%"),
    minWidth: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1834_2641_1805_3174_2341_5375: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1834_2641_1805_3174_2341_5376: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1834_2641_1805_3174_2341_5376_1006_11594: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I1834_2641_1805_3168: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1834_2641_1805_3169: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1834_2641_1805_3169: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1834_2641_1805_3170: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1834_2641_1805_3170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1834_2641_1805_3171: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1834_2641_1805_3171: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_I1834_2641_1805_3176: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("0%")
  },
  View_1834_2642: {
    width: wp("22%"),
    height: hp("316%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1834_2642_1805_3359: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1834_2642_1805_3570: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("292%"),
    minHeight: hp("292%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1834_2642_1805_3228: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 235, 236, 1)"
  },
  View_I1834_2642_1805_3355: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1834_2642_1805_4244: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1834_2642_1805_4244: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_I1834_2642_1805_3308: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1834_2642_1805_3230: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1834_2642_1805_3229: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1834_2642_1805_3229: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1834_2642_1805_3309: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1834_2642_1805_3310: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1834_2642_1805_3311: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1834_2642_1805_3311: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1834_2642_1805_3501: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1834_2642_1805_3227: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1834_2642_1805_3227: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_I1834_2642_1805_3324: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1834_2642_1805_3314: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1834_2642_1805_3315: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1834_2642_1805_3316: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1834_2642_1805_3316: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1834_2642_1805_3317: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1834_2642_1805_3318: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1834_2642_1805_3319: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1834_2642_1805_3319: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1834_2642_1805_3325: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1834_2642_1805_3326: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1834_2642_1805_3327: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1834_2642_1805_3327: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1834_2642_1805_3328: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1834_2642_1805_3329: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1834_2642_1805_3330: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1834_2642_1805_3330: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1834_2642_1805_3335: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1834_2642_1805_3336: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1834_2642_1805_3337: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1834_2642_1805_3337: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1834_2642_1805_3338: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1834_2642_1805_3339: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1834_2642_1805_3340: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1834_2642_1805_3340: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1834_2642_1805_3341: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1834_2642_1805_3342: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1834_2642_1805_3343: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1834_2642_1805_3343: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1834_2642_1805_3344: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1834_2642_1805_3345: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1834_2642_1805_3346: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1834_2642_1805_3346: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1834_2642_1805_3976: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("296%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1834_2642_1805_3295: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1834_2642_1805_3295_1348_11418: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  },
  View_I1834_2642_1805_3358: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1834_2642_1805_3357: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1834_2642_1805_3298: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I1834_2642_1805_3356: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1834_2642_1805_3299: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1834_2642_1805_3299: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1834_2642_1805_3300: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1834_2642_1805_3300: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1834_2642_1805_3301: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
