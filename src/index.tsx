import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'grf-vid-pr' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const GrfVidPr = NativeModules.GrfVidPr
  ? NativeModules.GrfVidPr
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  // console.log(`[LOG] multiply of ${a} and ${b}`);
  return GrfVidPr.multiply(a, b);
}
