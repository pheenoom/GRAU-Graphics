#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform float n = 8.0;
const float margen = 0.1;
void main()
{    
    vec2 tablero = vtexCoord * n;
    float residuoS = fract(tablero.s);
    float residuoT = fract(tablero.t);
    
    if (residuoS <= margen || residuoT <= margen) {
        fragColor = vec4(0.0, 0.0, 0.0, 1.0);
    }
    else {
        fragColor = vec4(0.8, 0.8, 0.8, 1.0);
    }
}
