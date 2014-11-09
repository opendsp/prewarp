
/**
 * @module prewarp
 * @author stagas
 * @org opendsp
 * @license mit
 */

export default function prewarp(f){
  return Math.tan(Math.PI * f / sampleRate);
}
