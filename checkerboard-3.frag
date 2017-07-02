#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform float n = 8;
const float marge = 0.1;

void main()
{
    vec2 tauler = vtexCoord * n; // [0...n]
    if (fract(tauler.s) < marge || fract(tauler.t) < marge) {
        fragColor = vec4(0.0, 0.0, 0.0, 1.0);
    }
    else {    
        fragColor = vec4(0.8, 0.8, 0.8, 1.0);
    }
}
