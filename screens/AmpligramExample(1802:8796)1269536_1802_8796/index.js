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
      <View style={styles.View_1832_2282}>
        <View style={styles.View_1832_2247}>
          <View style={styles.View_I1832_2247_1020_12824}>
            <View style={styles.View_I1832_2247_1020_12824_1569_3705}>
              <View
                style={styles.View_I1832_2247_1020_12824_1569_3705_1348_11418}
              />
            </View>
            <View style={styles.View_I1832_2247_1020_12824_1569_3578}>
              <View style={styles.View_I1832_2247_1020_12824_1596_3628}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cdc/5c47/795de3c6369f72670b8ff56222235578"
                  }}
                  style={styles.ImageBackground_I1832_2247_1020_12824_2342_3389}
                />
                <View style={styles.View_I1832_2247_1020_12824_1569_3579}>
                  <Text style={styles.Text_I1832_2247_1020_12824_1569_3579}>
                    Rene Brandel
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1832_2247_1020_12824_1596_3635}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3cb/5bf1/22e3e8ed083b0c296db10d8ae570e422"
                  }}
                  style={styles.ImageBackground_I1832_2247_1020_12824_1655_4775}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8847/f9c6/c746f7cec24c67956b9ac82a570969bb"
              }}
              style={styles.ImageBackground_I1832_2247_1020_12824_1569_3496}
            />
            <View style={styles.View_I1832_2247_1020_12824_1569_3626}>
              <View style={styles.View_I1832_2247_1020_12824_1596_3543}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af97/831b/e098040954485f985ed266728ad666db"
                  }}
                  style={styles.ImageBackground_I1832_2247_1020_12824_1655_4774}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b9f/95d6/57aafe722773757756a5bd74b3b848a5"
                  }}
                  style={styles.ImageBackground_I1832_2247_1020_12824_1655_4880}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fc5/6c6a/f8de5c6f1570f1525e2da9ba20e52962"
                  }}
                  style={styles.ImageBackground_I1832_2247_1020_12824_1655_4772}
                />
              </View>
              <View style={styles.View_I1832_2247_1020_12824_1596_3529}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b99d/aec2/82a81cf70f74f8b105f29c2f86103962"
                  }}
                  style={styles.ImageBackground_I1832_2247_1020_12824_1655_4773}
                />
              </View>
            </View>
            <View style={styles.View_I1832_2247_1020_12824_1569_3497}>
              <View style={styles.View_I1832_2247_1020_12824_1569_3698}>
                <View
                  style={styles.View_I1832_2247_1020_12824_1569_3698_1348_11418}
                />
              </View>
              <View style={styles.View_I1832_2247_1020_12824_1596_3746}>
                <View style={styles.View_I1832_2247_1020_12824_1569_3498}>
                  <Text style={styles.Text_I1832_2247_1020_12824_1569_3498}>
                    Firstname Lastname
                  </Text>
                </View>
                <View style={styles.View_I1832_2247_1020_12824_1569_3499}>
                  <Text style={styles.Text_I1832_2247_1020_12824_1569_3499}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore.”
                  </Text>
                </View>
                <View style={styles.View_I1832_2247_1020_12824_1569_3500}>
                  <Text style={styles.Text_I1832_2247_1020_12824_1569_3500}>
                    Timestamp
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1832_2177}>
          <View style={styles.View_I1832_2177_1020_12824}>
            <View style={styles.View_I1832_2177_1020_12824_1569_3705}>
              <View
                style={styles.View_I1832_2177_1020_12824_1569_3705_1348_11418}
              />
            </View>
            <View style={styles.View_I1832_2177_1020_12824_1569_3578}>
              <View style={styles.View_I1832_2177_1020_12824_1596_3628}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cdc/5c47/795de3c6369f72670b8ff56222235578"
                  }}
                  style={styles.ImageBackground_I1832_2177_1020_12824_2342_3389}
                />
                <View style={styles.View_I1832_2177_1020_12824_1569_3579}>
                  <Text style={styles.Text_I1832_2177_1020_12824_1569_3579}>
                    Rene Brandel
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1832_2177_1020_12824_1596_3635}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3cb/5bf1/22e3e8ed083b0c296db10d8ae570e422"
                  }}
                  style={styles.ImageBackground_I1832_2177_1020_12824_1655_4775}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8847/f9c6/c746f7cec24c67956b9ac82a570969bb"
              }}
              style={styles.ImageBackground_I1832_2177_1020_12824_1569_3496}
            />
            <View style={styles.View_I1832_2177_1020_12824_1569_3626}>
              <View style={styles.View_I1832_2177_1020_12824_1596_3543}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af97/831b/e098040954485f985ed266728ad666db"
                  }}
                  style={styles.ImageBackground_I1832_2177_1020_12824_1655_4774}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b9f/95d6/57aafe722773757756a5bd74b3b848a5"
                  }}
                  style={styles.ImageBackground_I1832_2177_1020_12824_1655_4880}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fc5/6c6a/f8de5c6f1570f1525e2da9ba20e52962"
                  }}
                  style={styles.ImageBackground_I1832_2177_1020_12824_1655_4772}
                />
              </View>
              <View style={styles.View_I1832_2177_1020_12824_1596_3529}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b99d/aec2/82a81cf70f74f8b105f29c2f86103962"
                  }}
                  style={styles.ImageBackground_I1832_2177_1020_12824_1655_4773}
                />
              </View>
            </View>
            <View style={styles.View_I1832_2177_1020_12824_1569_3497}>
              <View style={styles.View_I1832_2177_1020_12824_1569_3698}>
                <View
                  style={styles.View_I1832_2177_1020_12824_1569_3698_1348_11418}
                />
              </View>
              <View style={styles.View_I1832_2177_1020_12824_1596_3746}>
                <View style={styles.View_I1832_2177_1020_12824_1569_3498}>
                  <Text style={styles.Text_I1832_2177_1020_12824_1569_3498}>
                    Firstname Lastname
                  </Text>
                </View>
                <View style={styles.View_I1832_2177_1020_12824_1569_3499}>
                  <Text style={styles.Text_I1832_2177_1020_12824_1569_3499}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore.”
                  </Text>
                </View>
                <View style={styles.View_I1832_2177_1020_12824_1569_3500}>
                  <Text style={styles.Text_I1832_2177_1020_12824_1569_3500}>
                    Timestamp
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1832_2142}>
          <View style={styles.View_I1832_2142_1020_12824}>
            <View style={styles.View_I1832_2142_1020_12824_1569_3705}>
              <View
                style={styles.View_I1832_2142_1020_12824_1569_3705_1348_11418}
              />
            </View>
            <View style={styles.View_I1832_2142_1020_12824_1569_3578}>
              <View style={styles.View_I1832_2142_1020_12824_1596_3628}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cdc/5c47/795de3c6369f72670b8ff56222235578"
                  }}
                  style={styles.ImageBackground_I1832_2142_1020_12824_2342_3389}
                />
                <View style={styles.View_I1832_2142_1020_12824_1569_3579}>
                  <Text style={styles.Text_I1832_2142_1020_12824_1569_3579}>
                    Rene Brandel
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1832_2142_1020_12824_1596_3635}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3cb/5bf1/22e3e8ed083b0c296db10d8ae570e422"
                  }}
                  style={styles.ImageBackground_I1832_2142_1020_12824_1655_4775}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8847/f9c6/c746f7cec24c67956b9ac82a570969bb"
              }}
              style={styles.ImageBackground_I1832_2142_1020_12824_1569_3496}
            />
            <View style={styles.View_I1832_2142_1020_12824_1569_3626}>
              <View style={styles.View_I1832_2142_1020_12824_1596_3543}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af97/831b/e098040954485f985ed266728ad666db"
                  }}
                  style={styles.ImageBackground_I1832_2142_1020_12824_1655_4774}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b9f/95d6/57aafe722773757756a5bd74b3b848a5"
                  }}
                  style={styles.ImageBackground_I1832_2142_1020_12824_1655_4880}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fc5/6c6a/f8de5c6f1570f1525e2da9ba20e52962"
                  }}
                  style={styles.ImageBackground_I1832_2142_1020_12824_1655_4772}
                />
              </View>
              <View style={styles.View_I1832_2142_1020_12824_1596_3529}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b99d/aec2/82a81cf70f74f8b105f29c2f86103962"
                  }}
                  style={styles.ImageBackground_I1832_2142_1020_12824_1655_4773}
                />
              </View>
            </View>
            <View style={styles.View_I1832_2142_1020_12824_1569_3497}>
              <View style={styles.View_I1832_2142_1020_12824_1569_3698}>
                <View
                  style={styles.View_I1832_2142_1020_12824_1569_3698_1348_11418}
                />
              </View>
              <View style={styles.View_I1832_2142_1020_12824_1596_3746}>
                <View style={styles.View_I1832_2142_1020_12824_1569_3498}>
                  <Text style={styles.Text_I1832_2142_1020_12824_1569_3498}>
                    Firstname Lastname
                  </Text>
                </View>
                <View style={styles.View_I1832_2142_1020_12824_1569_3499}>
                  <Text style={styles.Text_I1832_2142_1020_12824_1569_3499}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore.”
                  </Text>
                </View>
                <View style={styles.View_I1832_2142_1020_12824_1569_3500}>
                  <Text style={styles.Text_I1832_2142_1020_12824_1569_3500}>
                    Timestamp
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1832_2212}>
          <View style={styles.View_I1832_2212_1020_12824}>
            <View style={styles.View_I1832_2212_1020_12824_1569_3705}>
              <View
                style={styles.View_I1832_2212_1020_12824_1569_3705_1348_11418}
              />
            </View>
            <View style={styles.View_I1832_2212_1020_12824_1569_3578}>
              <View style={styles.View_I1832_2212_1020_12824_1596_3628}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cdc/5c47/795de3c6369f72670b8ff56222235578"
                  }}
                  style={styles.ImageBackground_I1832_2212_1020_12824_2342_3389}
                />
                <View style={styles.View_I1832_2212_1020_12824_1569_3579}>
                  <Text style={styles.Text_I1832_2212_1020_12824_1569_3579}>
                    Rene Brandel
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1832_2212_1020_12824_1596_3635}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3cb/5bf1/22e3e8ed083b0c296db10d8ae570e422"
                  }}
                  style={styles.ImageBackground_I1832_2212_1020_12824_1655_4775}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8847/f9c6/c746f7cec24c67956b9ac82a570969bb"
              }}
              style={styles.ImageBackground_I1832_2212_1020_12824_1569_3496}
            />
            <View style={styles.View_I1832_2212_1020_12824_1569_3626}>
              <View style={styles.View_I1832_2212_1020_12824_1596_3543}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af97/831b/e098040954485f985ed266728ad666db"
                  }}
                  style={styles.ImageBackground_I1832_2212_1020_12824_1655_4774}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b9f/95d6/57aafe722773757756a5bd74b3b848a5"
                  }}
                  style={styles.ImageBackground_I1832_2212_1020_12824_1655_4880}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fc5/6c6a/f8de5c6f1570f1525e2da9ba20e52962"
                  }}
                  style={styles.ImageBackground_I1832_2212_1020_12824_1655_4772}
                />
              </View>
              <View style={styles.View_I1832_2212_1020_12824_1596_3529}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b99d/aec2/82a81cf70f74f8b105f29c2f86103962"
                  }}
                  style={styles.ImageBackground_I1832_2212_1020_12824_1655_4773}
                />
              </View>
            </View>
            <View style={styles.View_I1832_2212_1020_12824_1569_3497}>
              <View style={styles.View_I1832_2212_1020_12824_1569_3698}>
                <View
                  style={styles.View_I1832_2212_1020_12824_1569_3698_1348_11418}
                />
              </View>
              <View style={styles.View_I1832_2212_1020_12824_1596_3746}>
                <View style={styles.View_I1832_2212_1020_12824_1569_3498}>
                  <Text style={styles.Text_I1832_2212_1020_12824_1569_3498}>
                    Firstname Lastname
                  </Text>
                </View>
                <View style={styles.View_I1832_2212_1020_12824_1569_3499}>
                  <Text style={styles.Text_I1832_2212_1020_12824_1569_3499}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore.”
                  </Text>
                </View>
                <View style={styles.View_I1832_2212_1020_12824_1569_3500}>
                  <Text style={styles.Text_I1832_2212_1020_12824_1569_3500}>
                    Timestamp
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_2369}>
        <View style={styles.View_I1832_2369_1805_3173}>
          <View style={styles.View_I1832_2369_1805_3209} />
          <View style={styles.View_I1832_2369_1805_3174}>
            <View style={styles.View_I1832_2369_1805_3174_2341_5373}>
              <View style={styles.View_I1832_2369_1805_3174_2341_5374}>
                <View style={styles.View_I1832_2369_1805_3174_2341_5375}>
                  <Text style={styles.Text_I1832_2369_1805_3174_2341_5375}>
                    Placeholder
                  </Text>
                </View>
                <View style={styles.View_I1832_2369_1805_3174_2341_5376}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95c6/da65/c317a2f7a18fd952dc963fcb8bcca157"
                    }}
                    style={
                      styles.ImageBackground_I1832_2369_1805_3174_2341_5376_1006_11594
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I1832_2369_1805_3168}>
            <View style={styles.View_I1832_2369_1805_3169}>
              <Text style={styles.Text_I1832_2369_1805_3169}>Home</Text>
            </View>
            <View style={styles.View_I1832_2369_1805_3170}>
              <Text style={styles.Text_I1832_2369_1805_3170}>About</Text>
            </View>
            <View style={styles.View_I1832_2369_1805_3171}>
              <Text style={styles.Text_I1832_2369_1805_3171}>Pricing</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30ba/02c1/de743a032b8600529e6e3a6ff5a6c0c8"
            }}
            style={styles.ImageBackground_I1832_2369_1805_3176}
          />
        </View>
      </View>
      <View style={styles.View_1832_2555}>
        <View style={styles.View_I1832_2555_1805_3359}>
          <View style={styles.View_I1832_2555_1805_3570}>
            <View style={styles.View_I1832_2555_1805_3228} />
            <View style={styles.View_I1832_2555_1805_3355}>
              <View style={styles.View_I1832_2555_1805_4244}>
                <Text style={styles.Text_I1832_2555_1805_4244}>
                  ORGANIZATION
                </Text>
              </View>
              <View style={styles.View_I1832_2555_1805_3308}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ad7/9147/99b2ae7140ddda8fcd5077c10eb97e0d"
                  }}
                  style={styles.ImageBackground_I1832_2555_1805_3230}
                />
                <View style={styles.View_I1832_2555_1805_3229}>
                  <Text style={styles.Text_I1832_2555_1805_3229}>
                    Lorem Ipsum
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1832_2555_1805_3309}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ad7/9147/99b2ae7140ddda8fcd5077c10eb97e0d"
                  }}
                  style={styles.ImageBackground_I1832_2555_1805_3310}
                />
                <View style={styles.View_I1832_2555_1805_3311}>
                  <Text style={styles.Text_I1832_2555_1805_3311}>
                    Lorem Ipsum
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I1832_2555_1805_3501}>
              <View style={styles.View_I1832_2555_1805_3227}>
                <Text style={styles.Text_I1832_2555_1805_3227}>
                  ORGANIZATION
                </Text>
              </View>
              <View style={styles.View_I1832_2555_1805_3324}>
                <View style={styles.View_I1832_2555_1805_3314}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ad7/9147/99b2ae7140ddda8fcd5077c10eb97e0d"
                    }}
                    style={styles.ImageBackground_I1832_2555_1805_3315}
                  />
                  <View style={styles.View_I1832_2555_1805_3316}>
                    <Text style={styles.Text_I1832_2555_1805_3316}>
                      Lorem Ipsum
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I1832_2555_1805_3317}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ad7/9147/99b2ae7140ddda8fcd5077c10eb97e0d"
                    }}
                    style={styles.ImageBackground_I1832_2555_1805_3318}
                  />
                  <View style={styles.View_I1832_2555_1805_3319}>
                    <Text style={styles.Text_I1832_2555_1805_3319}>
                      Lorem Ipsum
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I1832_2555_1805_3325}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ad7/9147/99b2ae7140ddda8fcd5077c10eb97e0d"
                    }}
                    style={styles.ImageBackground_I1832_2555_1805_3326}
                  />
                  <View style={styles.View_I1832_2555_1805_3327}>
                    <Text style={styles.Text_I1832_2555_1805_3327}>
                      Lorem Ipsum
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I1832_2555_1805_3328}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ad7/9147/99b2ae7140ddda8fcd5077c10eb97e0d"
                    }}
                    style={styles.ImageBackground_I1832_2555_1805_3329}
                  />
                  <View style={styles.View_I1832_2555_1805_3330}>
                    <Text style={styles.Text_I1832_2555_1805_3330}>
                      Lorem Ipsum
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I1832_2555_1805_3335}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ad7/9147/99b2ae7140ddda8fcd5077c10eb97e0d"
                    }}
                    style={styles.ImageBackground_I1832_2555_1805_3336}
                  />
                  <View style={styles.View_I1832_2555_1805_3337}>
                    <Text style={styles.Text_I1832_2555_1805_3337}>
                      Lorem Ipsum
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I1832_2555_1805_3338}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ad7/9147/99b2ae7140ddda8fcd5077c10eb97e0d"
                    }}
                    style={styles.ImageBackground_I1832_2555_1805_3339}
                  />
                  <View style={styles.View_I1832_2555_1805_3340}>
                    <Text style={styles.Text_I1832_2555_1805_3340}>
                      Lorem Ipsum
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I1832_2555_1805_3341}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ad7/9147/99b2ae7140ddda8fcd5077c10eb97e0d"
                    }}
                    style={styles.ImageBackground_I1832_2555_1805_3342}
                  />
                  <View style={styles.View_I1832_2555_1805_3343}>
                    <Text style={styles.Text_I1832_2555_1805_3343}>
                      Lorem Ipsum
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I1832_2555_1805_3344}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ad7/9147/99b2ae7140ddda8fcd5077c10eb97e0d"
                    }}
                    style={styles.ImageBackground_I1832_2555_1805_3345}
                  />
                  <View style={styles.View_I1832_2555_1805_3346}>
                    <Text style={styles.Text_I1832_2555_1805_3346}>
                      Lorem Ipsum
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I1832_2555_1805_3976}>
            <View style={styles.View_I1832_2555_1805_3295}>
              <View style={styles.View_I1832_2555_1805_3295_1348_11418} />
            </View>
            <View style={styles.View_I1832_2555_1805_3358}>
              <View style={styles.View_I1832_2555_1805_3357}>
                <View style={styles.View_I1832_2555_1805_3298} />
                <View style={styles.View_I1832_2555_1805_3356}>
                  <View style={styles.View_I1832_2555_1805_3299}>
                    <Text style={styles.Text_I1832_2555_1805_3299}>
                      Lorem Ipsum
                    </Text>
                  </View>
                  <View style={styles.View_I1832_2555_1805_3300}>
                    <Text style={styles.Text_I1832_2555_1805_3300}>
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
                style={styles.ImageBackground_I1832_2555_1805_3301}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(245, 245, 245, 1)" },
  View_2: { height: hp("328%") },
  View_1832_2282: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("395%"),
    minHeight: hp("395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("-38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1832_2247: {
    width: wp("60%"),
    height: hp("99%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2247_1020_12824: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2247_1020_12824_1569_3705: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2247_1020_12824_1569_3705_1348_11418: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  },
  View_I1832_2247_1020_12824_1569_3578: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2247_1020_12824_1596_3628: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1832_2247_1020_12824_2342_3389: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_2247_1020_12824_1569_3579: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2247_1020_12824_1569_3579: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2247_1020_12824_1596_3635: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1832_2247_1020_12824_1655_4775: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1832_2247_1020_12824_1569_3496: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    resizeMode: "cover"
  },
  View_I1832_2247_1020_12824_1569_3626: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2247_1020_12824_1596_3543: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1832_2247_1020_12824_1655_4774: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1832_2247_1020_12824_1655_4880: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I1832_2247_1020_12824_1655_4772: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I1832_2247_1020_12824_1596_3529: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1832_2247_1020_12824_1655_4773: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  View_I1832_2247_1020_12824_1569_3497: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2247_1020_12824_1569_3698: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2247_1020_12824_1569_3698_1348_11418: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  },
  View_I1832_2247_1020_12824_1596_3746: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2247_1020_12824_1569_3498: {
    width: wp("58%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2247_1020_12824_1569_3498: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2247_1020_12824_1569_3499: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2247_1020_12824_1569_3499: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2247_1020_12824_1569_3500: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2247_1020_12824_1569_3500: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1832_2177: {
    width: wp("60%"),
    height: hp("99%"),
    top: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2177_1020_12824: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2177_1020_12824_1569_3705: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2177_1020_12824_1569_3705_1348_11418: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  },
  View_I1832_2177_1020_12824_1569_3578: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2177_1020_12824_1596_3628: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1832_2177_1020_12824_2342_3389: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_2177_1020_12824_1569_3579: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2177_1020_12824_1569_3579: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2177_1020_12824_1596_3635: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1832_2177_1020_12824_1655_4775: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1832_2177_1020_12824_1569_3496: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    resizeMode: "cover"
  },
  View_I1832_2177_1020_12824_1569_3626: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2177_1020_12824_1596_3543: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1832_2177_1020_12824_1655_4774: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1832_2177_1020_12824_1655_4880: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I1832_2177_1020_12824_1655_4772: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I1832_2177_1020_12824_1596_3529: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1832_2177_1020_12824_1655_4773: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  View_I1832_2177_1020_12824_1569_3497: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2177_1020_12824_1569_3698: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2177_1020_12824_1569_3698_1348_11418: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  },
  View_I1832_2177_1020_12824_1596_3746: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2177_1020_12824_1569_3498: {
    width: wp("58%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2177_1020_12824_1569_3498: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2177_1020_12824_1569_3499: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2177_1020_12824_1569_3499: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2177_1020_12824_1569_3500: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2177_1020_12824_1569_3500: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1832_2142: {
    width: wp("60%"),
    height: hp("99%"),
    top: hp("198%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2142_1020_12824: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2142_1020_12824_1569_3705: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2142_1020_12824_1569_3705_1348_11418: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  },
  View_I1832_2142_1020_12824_1569_3578: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2142_1020_12824_1596_3628: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1832_2142_1020_12824_2342_3389: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_2142_1020_12824_1569_3579: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2142_1020_12824_1569_3579: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2142_1020_12824_1596_3635: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1832_2142_1020_12824_1655_4775: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1832_2142_1020_12824_1569_3496: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    resizeMode: "cover"
  },
  View_I1832_2142_1020_12824_1569_3626: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2142_1020_12824_1596_3543: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1832_2142_1020_12824_1655_4774: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1832_2142_1020_12824_1655_4880: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I1832_2142_1020_12824_1655_4772: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I1832_2142_1020_12824_1596_3529: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1832_2142_1020_12824_1655_4773: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  View_I1832_2142_1020_12824_1569_3497: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2142_1020_12824_1569_3698: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2142_1020_12824_1569_3698_1348_11418: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  },
  View_I1832_2142_1020_12824_1596_3746: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2142_1020_12824_1569_3498: {
    width: wp("58%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2142_1020_12824_1569_3498: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2142_1020_12824_1569_3499: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2142_1020_12824_1569_3499: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2142_1020_12824_1569_3500: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2142_1020_12824_1569_3500: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1832_2212: {
    width: wp("60%"),
    height: hp("99%"),
    top: hp("296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2212_1020_12824: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2212_1020_12824_1569_3705: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2212_1020_12824_1569_3705_1348_11418: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  },
  View_I1832_2212_1020_12824_1569_3578: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2212_1020_12824_1596_3628: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1832_2212_1020_12824_2342_3389: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_2212_1020_12824_1569_3579: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2212_1020_12824_1569_3579: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2212_1020_12824_1596_3635: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1832_2212_1020_12824_1655_4775: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1832_2212_1020_12824_1569_3496: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    resizeMode: "cover"
  },
  View_I1832_2212_1020_12824_1569_3626: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2212_1020_12824_1596_3543: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1832_2212_1020_12824_1655_4774: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1832_2212_1020_12824_1655_4880: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I1832_2212_1020_12824_1655_4772: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I1832_2212_1020_12824_1596_3529: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1832_2212_1020_12824_1655_4773: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  View_I1832_2212_1020_12824_1569_3497: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2212_1020_12824_1569_3698: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2212_1020_12824_1569_3698_1348_11418: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  },
  View_I1832_2212_1020_12824_1596_3746: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2212_1020_12824_1569_3498: {
    width: wp("58%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2212_1020_12824_1569_3498: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2212_1020_12824_1569_3499: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2212_1020_12824_1569_3499: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2212_1020_12824_1569_3500: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2212_1020_12824_1569_3500: {
    color: "rgba(92, 102, 112, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1832_2369: {
    width: wp("100%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2369_1805_3173: {
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
  View_I1832_2369_1805_3209: {
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
  View_I1832_2369_1805_3174: {
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
  View_I1832_2369_1805_3174_2341_5373: {
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
  View_I1832_2369_1805_3174_2341_5374: {
    width: wp("21%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2369_1805_3174_2341_5375: {
    width: wp("16%"),
    minWidth: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2369_1805_3174_2341_5375: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2369_1805_3174_2341_5376: {
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
  ImageBackground_I1832_2369_1805_3174_2341_5376_1006_11594: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I1832_2369_1805_3168: {
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
  View_I1832_2369_1805_3169: {
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
  Text_I1832_2369_1805_3169: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2369_1805_3170: {
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
  Text_I1832_2369_1805_3170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2369_1805_3171: {
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
  Text_I1832_2369_1805_3171: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_I1832_2369_1805_3176: {
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
  View_1832_2555: {
    width: wp("29%"),
    height: hp("316%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2555_1805_3359: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2555_1805_3570: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("292%"),
    minHeight: hp("292%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2555_1805_3228: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 235, 236, 1)"
  },
  View_I1832_2555_1805_3355: {
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
  View_I1832_2555_1805_4244: {
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
  Text_I1832_2555_1805_4244: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_I1832_2555_1805_3308: {
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
  ImageBackground_I1832_2555_1805_3230: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1832_2555_1805_3229: {
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
  Text_I1832_2555_1805_3229: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2555_1805_3309: {
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
  ImageBackground_I1832_2555_1805_3310: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1832_2555_1805_3311: {
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
  Text_I1832_2555_1805_3311: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2555_1805_3501: {
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
  View_I1832_2555_1805_3227: {
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
  Text_I1832_2555_1805_3227: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_I1832_2555_1805_3324: {
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
  View_I1832_2555_1805_3314: {
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
  ImageBackground_I1832_2555_1805_3315: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1832_2555_1805_3316: {
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
  Text_I1832_2555_1805_3316: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2555_1805_3317: {
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
  ImageBackground_I1832_2555_1805_3318: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1832_2555_1805_3319: {
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
  Text_I1832_2555_1805_3319: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2555_1805_3325: {
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
  ImageBackground_I1832_2555_1805_3326: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1832_2555_1805_3327: {
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
  Text_I1832_2555_1805_3327: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2555_1805_3328: {
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
  ImageBackground_I1832_2555_1805_3329: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1832_2555_1805_3330: {
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
  Text_I1832_2555_1805_3330: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2555_1805_3335: {
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
  ImageBackground_I1832_2555_1805_3336: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1832_2555_1805_3337: {
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
  Text_I1832_2555_1805_3337: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2555_1805_3338: {
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
  ImageBackground_I1832_2555_1805_3339: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1832_2555_1805_3340: {
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
  Text_I1832_2555_1805_3340: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2555_1805_3341: {
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
  ImageBackground_I1832_2555_1805_3342: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1832_2555_1805_3343: {
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
  Text_I1832_2555_1805_3343: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2555_1805_3344: {
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
  ImageBackground_I1832_2555_1805_3345: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1832_2555_1805_3346: {
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
  Text_I1832_2555_1805_3346: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2555_1805_3976: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("296%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2555_1805_3295: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2555_1805_3295_1348_11418: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  },
  View_I1832_2555_1805_3358: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2555_1805_3357: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2555_1805_3298: {
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
  View_I1832_2555_1805_3356: {
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
  View_I1832_2555_1805_3299: {
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
  Text_I1832_2555_1805_3299: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2555_1805_3300: {
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
  Text_I1832_2555_1805_3300: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1832_2555_1805_3301: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
